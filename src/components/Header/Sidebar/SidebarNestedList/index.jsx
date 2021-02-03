import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import SidebarListItem from '../SidebarListItem';

const propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

const SidebarNestedList = ({ item, toggleDrawer }) => {
  const [expand, setExpand] = useState(null);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <>
      <ListItem button onClick={toggleExpand}>
        <ListItemText primary={item.name} />
        {expand ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={expand} unmountOnExit>
        <List component="div" disablePadding>
          {item.children.map((children) => (
            <SidebarListItem
              key={children.name}
              item={children}
              toggleDrawer={toggleDrawer}
              nested
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

SidebarNestedList.propTypes = propTypes;

export default SidebarNestedList;
