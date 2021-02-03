import Badge from '@material-ui/core/Badge';
import SpeedDialAction from '@material-ui/core/SpeedDialAction';
import ShoppingBagIcon from '@material-ui/icons/ShoppingBag';
import ShoppingBagOutlinedIcon from '@material-ui/icons/ShoppingBagOutlined';
import { getCartQuantity, selectCart } from 'features/cart/cartSlice';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

const propTypes = {
  handleClose: PropTypes.func.isRequired,
};

function FavoriteButton({ handleClose, ...props }) {
  const cart = useSelector(selectCart);
  const cartQuantity = getCartQuantity(cart);
  const icon =
    cartQuantity > 0 ? <ShoppingBagIcon /> : <ShoppingBagOutlinedIcon />;

  return (
    <SpeedDialAction
      component={RouterLink}
      to="/gio-hang"
      icon={
        <Badge color="info" badgeContent={cartQuantity}>
          {icon}
        </Badge>
      }
      tooltipTitle="Giỏ hàng"
      onClick={handleClose}
      {...props}
    />
  );
}

FavoriteButton.propTypes = propTypes;

export default FavoriteButton;
