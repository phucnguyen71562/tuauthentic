import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import Empty from 'components/Empty';
import TitleWrapper from 'components/TitleWrapper';
import PropTypes from 'prop-types';
import useStyles from './CartContainer.style';
import CartDetails from './CartDetails';
import CartList from './CartList';

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartQuantity: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
};

function CartContainer({
  cart,
  cartTotal,
  cartQuantity,
  onSubmit,
  processing,
}) {
  const classes = useStyles();

  if (cart.length === 0) {
    return (
      <Empty
        title="Chưa có sản phẩm nào trong giỏ hàng."
        icon={RemoveShoppingCartOutlinedIcon}
      />
    );
  }

  return (
    <Box className={classes.root}>
      <TitleWrapper>Giỏ hàng của bạn</TitleWrapper>

      <Grid container className={classes.content}>
        <Grid item xs={12} md={7}>
          <List>
            {cart.map((item) => (
              <CartList key={`${item.id}-${item.size}`} item={item} />
            ))}
          </List>
        </Grid>

        <Divider orientation="vertical" flexItem sx={{ mx: 3 }} />

        <Grid item xs={12} md>
          <CartDetails
            cartTotal={cartTotal}
            cartQuantity={cartQuantity}
            onSubmit={onSubmit}
            processing={processing}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

CartContainer.propTypes = propTypes;

export default CartContainer;
