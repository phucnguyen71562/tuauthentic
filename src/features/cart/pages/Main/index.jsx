import Typography from '@material-ui/core/Typography';
import Breadcrumbs from 'components/Breadcrumbs';
import MainContainer from 'components/MainContainer';
import {
  deleteCart,
  getCartQuantity,
  getCartTotal,
  selectCart,
} from 'features/cart/cartSlice';
import CartContainer from 'features/cart/components/CartContainer';
import useDocumentTitle from 'hooks/useDocumentTitle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Main() {
  const [processing, setProcessing] = useState(false);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const history = useHistory();

  const cartTotal = getCartTotal(cart);
  const cartQuantity = getCartQuantity(cart);

  useDocumentTitle('Giỏ hàng | tuauthentic.com');

  const onSubmit = (data) => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      dispatch(deleteCart());
      history.push('/gio-hang/thanks', { success: true });
    }, 3000);
  };

  return (
    <MainContainer>
      <Breadcrumbs>
        <Typography color="textPrimary">Giỏ hàng</Typography>
      </Breadcrumbs>

      <CartContainer
        cart={cart}
        cartTotal={cartTotal}
        cartQuantity={cartQuantity}
        onSubmit={onSubmit}
        processing={processing}
      />
    </MainContainer>
  );
}

export default Main;
