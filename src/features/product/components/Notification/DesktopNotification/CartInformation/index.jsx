import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import {
  getCartQuantity,
  getCartTotal,
  selectCart,
} from 'features/cart/cartSlice';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils/price';
import useStyles from './CartInformation.style';

function CartInformation() {
  const classes = useStyles();
  const cart = useSelector(selectCart);
  const cartTotal = getCartTotal(cart);
  const cartQuantity = getCartQuantity(cart);

  return (
    <>
      <Typography component="h2" variant="h6" className={classes.title}>
        Giỏ hàng
      </Typography>

      <Box className={classes.cartBox}>
        <Typography component="p" variant="body2">
          {cartQuantity} sản phẩm
        </Typography>

        <Typography component="p" className={classes.fontWeightBold}>
          {formatPrice(cartTotal)}
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box className={classes.cartBox}>
        <Typography
          component="p"
          variant="body2"
          className={classes.fontWeightBold}
        >
          Tổng cộng
        </Typography>

        <Typography component="p" className={classes.price}>
          {formatPrice(cartTotal)}
        </Typography>
      </Box>
    </>
  );
}

export default CartInformation;
