import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import NavItem from '../NavItem';
import useStyles from './DropdownMenu.style';

const propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
};

const DropdownMenu = ({ category }) => {
  const classes = useStyles();

  return (
    <Box className={classes.dropdown}>
      <Typography
        component="p"
        variant="body2"
        color="textPrimary"
        className={classes.dropdownText}
      >
        {category.name}
      </Typography>

      <Box className={classes.dropdownMenu}>
        {category.children.map((children) => (
          <NavItem
            key={children.name}
            category={children}
            className={classes.dropdownMenuItem}
          />
        ))}
      </Box>
    </Box>
  );
};

DropdownMenu.propTypes = propTypes;

export default DropdownMenu;
