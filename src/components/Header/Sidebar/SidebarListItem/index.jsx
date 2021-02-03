import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './SidebarListItem.style';

const propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  nested: PropTypes.bool,
};

const SidebarListItem = ({ item, toggleDrawer, nested = false }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      component={RouterLink}
      to={item.path}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={clsx({
        [classes.nestedLink]: nested,
      })}
    >
      <ListItemText primary={item.name} />
    </ListItem>
  );
};

SidebarListItem.propTypes = propTypes;

export default SidebarListItem;
