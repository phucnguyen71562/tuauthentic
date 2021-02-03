import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import favoriteReducer from '../features/favorite/favoriteSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
