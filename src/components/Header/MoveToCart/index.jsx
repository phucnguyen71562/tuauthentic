import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBagIcon from '@material-ui/icons/ShoppingBag';
import ShoppingBagOutlinedIcon from '@material-ui/icons/ShoppingBagOutlined';
import { getCartQuantity, selectCart } from 'features/cart/cartSlice';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

function MoveToFavorite() {
  const cart = useSelector(selectCart);
  const cartQuantity = getCartQuantity(cart);
  const icon =
    cartQuantity > 0 ? <ShoppingBagIcon /> : <ShoppingBagOutlinedIcon />;

  return (
    <IconButton component={RouterLink} to="/gio-hang" aria-label="Move to cart">
      <Badge color="info" badgeContent={cartQuantity}>
        {icon}
      </Badge>
    </IconButton>
  );
}

export default MoveToFavorite;
