import { Badge, Box, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import PropTypes from 'prop-types';
import { getPriceDiscount, formatPrice } from 'utils/price';
import useStyles from './TitleAndPrice.style';

const propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

const TitleAndPrice = ({ name, status, price, discount, loading }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" width="50%" />
      </>
    );
  }

  return (
    <Box className={classes.root}>
      <Typography
        component="h1"
        variant="h4"
        gutterBottom
        className={classes.title}
      >
        {name}
      </Typography>

      <Typography
        component="p"
        variant="h6"
        gutterBottom
        className={classes.price}
      >
        {status === 2 ? (
          <Badge
            badgeContent="Hàng order"
            color="primary"
            classes={{
              badge: classes.status,
            }}
          >
            {getPriceDiscount(price, discount)}
          </Badge>
        ) : (
          getPriceDiscount(price, discount)
        )}
      </Typography>

      {discount > 0 && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography component="span" variant="body2">
            -{discount}&#37;
          </Typography>
          <Typography
            component="span"
            variant="caption"
            color="textSecondary"
            className={classes.originalPrice}
          >
            {formatPrice(price)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

TitleAndPrice.propTypes = propTypes;

export default TitleAndPrice;
