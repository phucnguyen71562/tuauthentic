import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { formatPrice, getPriceDiscount } from 'utils/price';
import useStyles from './ProductInformation.style';

const propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
};

function ProductInformation({ product, size }) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={5}>
        <img src={product.image} alt={product.name} className={classes.img} />
      </Grid>

      <Grid item xs={7} className={classes.information}>
        <Typography
          component="h3"
          variant="h6"
          gutterBottom
          className={classes.informationName}
        >
          {product.name}
        </Typography>

        <Typography
          component="p"
          variant="subtitle1"
          gutterBottom
          className={classes.price}
        >
          {getPriceDiscount(product.price, product.discount)}
        </Typography>

        {product.discount > 0 && (
          <Typography
            component="p"
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            className={classes.originalPrice}
          >
            {formatPrice(product.price)}
          </Typography>
        )}

        <Typography
          component="p"
          variant="body2"
          color="textSecondary"
          gutterBottom
        >
          Màu: {product.color}
        </Typography>

        <Typography
          component="p"
          variant="body2"
          color="textSecondary"
          gutterBottom
        >
          Size: {size}
        </Typography>
      </Grid>
    </>
  );
}

ProductInformation.propTypes = propTypes;

export default ProductInformation;
