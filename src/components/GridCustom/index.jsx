import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useStyles from './GridCustom.style';

const propTypes = {
  className: PropTypes.string,
};

const GridCustom = ({ className = '', ...props }) => {
  const classes = useStyles();

  return <Box className={clsx(classes.container, className)} {...props} />;
};

GridCustom.propTypes = propTypes;

export default GridCustom;
