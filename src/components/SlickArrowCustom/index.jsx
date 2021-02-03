import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useStyles from './SlickArrowCustom.style';

export const NextArrow = ({ className = '', onClick = null }) => {
  const classes = useStyles();

  return (
    <i
      className={clsx(classes.arrow, classes.arrowNext, className)}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <NavigateNextIcon className={classes.icon} />
    </i>
  );
};

NextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export const PrevArrow = ({ className = '', onClick = null }) => {
  const classes = useStyles();

  return (
    <i
      className={clsx(classes.arrow, classes.arrowPrev, className)}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <NavigateBeforeIcon className={classes.icon} />
    </i>
  );
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
