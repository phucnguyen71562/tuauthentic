import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuIcon from '@material-ui/icons/Menu';
import CATEGORIES from 'app/category';
import logoText from 'assets/images/logo-text.webp';
import { useCallback, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './Sidebar.style';
import SidebarListItem from './SidebarListItem';
import SidebarNestedList from './SidebarNestedList';

function Sidebar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = useCallback(
    (param) => (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      setOpen(param);
    },
    []
  );

  const subHeaderContent = (
    <ListSubheader
      component={RouterLink}
      to="/"
      onClick={toggleDrawer(false)}
      className={classes.listSubheader}
    >
      <Box component="img" src={logoText} alt="logo" />
    </ListSubheader>
  );

  return (
    <>
      <IconButton
        aria-label="Open drawer"
        edge="start"
        color="inherit"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List subheader={subHeaderContent} className={classes.list}>
          {CATEGORIES.map((category) => {
            if (category.children) {
              return (
                <SidebarNestedList
                  key={category.name}
                  item={category}
                  toggleDrawer={toggleDrawer}
                />
              );
            }

            return (
              <SidebarListItem
                key={category.name}
                item={category}
                toggleDrawer={toggleDrawer}
              />
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
