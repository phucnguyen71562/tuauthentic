import { Box, Grid, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import PropTypes from 'prop-types';
import useStyles from './SizeBox.style';
import SizeBoxItem from './SizeBoxItem';

const propTypes = {
  quantity: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  selectedSize: PropTypes.string.isRequired,
  sizeError: PropTypes.bool.isRequired,
  handleChooseSize: PropTypes.func.isRequired,
};

const SizeBox = ({
  quantity,
  sizes,
  loading,
  selectedSize,
  sizeError,
  handleChooseSize,
}) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Box className={classes.root}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height={100}
        />
      </Box>
    );
  }

  if (quantity === 0) {
    return (
      <Box className={classes.root}>
        <Typography
          component="p"
          variant="body2"
          color="error"
          className={classes.outOfStockText}
        >
          Sản phẩm tạm hết hàng
        </Typography>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Typography component="p" variant="body2" className={classes.title}>
        Chọn size
      </Typography>

      <Grid container alignItems="center">
        {sizes.map((size) => (
          <SizeBoxItem
            key={size}
            size={size}
            selectedSize={selectedSize}
            handleChooseSize={handleChooseSize}
          />
        ))}
      </Grid>

      {sizeError && (
        <Typography
          component="p"
          variant="subtitle2"
          color="error"
          sx={{ mt: 1, fontWeight: 'bold' }}
        >
          Vui lòng chọn size
        </Typography>
      )}
    </Box>
  );
};

SizeBox.propTypes = propTypes;

export default SizeBox;
