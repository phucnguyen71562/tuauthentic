import { Link } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './NavItem.style';

const propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

const NavItem = ({ category, className = null }) => {
  const classes = useStyles();

  return (
    <Link
      component={RouterLink}
      to={category.path}
      variant="body2"
      color="textPrimary"
      underline="none"
      className={clsx(classes.link, className ? className : classes.normalLink)}
    >
      {category.name}
    </Link>
  );
};

NavItem.propTypes = propTypes;

export default NavItem;
