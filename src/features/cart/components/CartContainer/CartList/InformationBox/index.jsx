import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { formatPrice, getPriceDiscount } from 'utils/price';
import useStyles from './InformationBox.style';

const propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
};

function InformationBox({ product, size }) {
  const classes = useStyles();

  return (
    <Box className={classes.flexColumn}>
      <Box className={classes.container}>
        <Box className={classes.wrapper}>
          <Link
            component={RouterLink}
            to={product.link}
            color="inherit"
            underline="none"
            className={classes.name}
          >
            {product.name}
          </Link>

          <Typography
            component="p"
            color="textPrimary"
            gutterBottom
            sx={{ fontSize: { xs: 14, md: 16 } }}
          >
            {product.color}
          </Typography>
        </Box>

        <Box className={classes.flexColumn} sx={{ alignItems: 'flex-end' }}>
          <Typography
            component="span"
            variant="subtitle1"
            color="error"
            className={classes.price}
          >
            {getPriceDiscount(product.price, product.discount)}
          </Typography>

          {product.discount > 0 && (
            <Typography
              component="span"
              variant="subtitle1"
              color="textSecondary"
              className={classes.originalPrice}
            >
              {formatPrice(product.price)}
            </Typography>
          )}
        </Box>
      </Box>

      <Typography
        component="p"
        color="textPrimary"
        sx={{ fontSize: { xs: 14, md: 16 } }}
      >
        SIZE: {size}
      </Typography>
    </Box>
  );
}

InformationBox.propTypes = propTypes;

export default InformationBox;
