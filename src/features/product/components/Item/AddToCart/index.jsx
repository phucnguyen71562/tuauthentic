import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PropTypes from 'prop-types';
import useStyles from './AddToCart.style';

const propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const AddToCart = ({ handleAddToCart, product, loading }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      fullWidth
      endIcon={<AddShoppingCartIcon />}
      className={classes.button}
      disabled={loading || product.quantity === 0}
      onClick={() => handleAddToCart(product)}
    >
      Thêm vào giỏ hàng
    </Button>
  );
};

AddToCart.propTypes = propTypes;

export default AddToCart;
