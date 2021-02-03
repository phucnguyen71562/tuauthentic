import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useStyles from './SizeBoxItem.style';

const propTypes = {
  size: PropTypes.string.isRequired,
  selectedSize: PropTypes.string.isRequired,
  handleChooseSize: PropTypes.func.isRequired,
};

const SizeBoxItem = ({ size, selectedSize, handleChooseSize }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs
      className={clsx(classes.sizeItem, {
        [classes.sizeItem_active]: size === selectedSize,
      })}
      onClick={() => handleChooseSize(size)}
    >
      <Typography component="p" variant="body2" className={classes.sizeText}>
        {size}
      </Typography>
    </Grid>
  );
};

SizeBoxItem.propTypes = propTypes;

export default SizeBoxItem;
