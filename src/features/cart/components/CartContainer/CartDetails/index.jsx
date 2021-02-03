import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils/price';
import CartForm from '../CartForm';
import useStyles from './CartDetails.style';

const propTypes = {
  cartTotal: PropTypes.number.isRequired,
  cartQuantity: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
};

function CartDetails({ cartTotal, cartQuantity, onSubmit, processing }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        CHI TIẾT HÓA ĐƠN
      </Typography>

      <Box className={classes.item}>
        <Typography component="span" variant="body2">
          Tạm tính ({cartQuantity} sản phẩm)
        </Typography>
        <Typography component="span" variant="body2">
          {formatPrice(cartTotal)}
        </Typography>
      </Box>

      <Box className={classes.item}>
        <Typography
          component="span"
          variant="body2"
          sx={{ fontWeight: 'bold' }}
        >
          Tổng tiền
        </Typography>
        <Typography
          component="span"
          variant="body2"
          color="error"
          sx={{ fontWeight: 'bold' }}
        >
          {formatPrice(cartTotal)}
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <CartForm onSubmit={onSubmit} processing={processing} />
    </Box>
  );
}

CartDetails.propTypes = propTypes;

export default CartDetails;
