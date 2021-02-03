import { createSlice } from '@reduxjs/toolkit';

const findIndex = (data, item) =>
  data.findIndex((v) => v.id === item.product.id && v.size === item.size);

const setValueToLocalStorage = (value) =>
  localStorage.setItem('tu-cart', JSON.stringify(value));

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: JSON.parse(localStorage.getItem('tu-cart')) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cartIndex = findIndex(state.value, action.payload);
      const product = action.payload.product;

      if (cartIndex >= 0) {
        state.value[cartIndex].quantity++;
      } else {
        const newProduct = {
          id: product.id,
          image: product.image,
          name: product.name,
          price: product.price,
          discount: product.discount,
          status: product.status,
          link: product.link,
          color: product.color,
        };

        state.value.push({
          product: newProduct,
          id: product.id,
          quantity: 1,
          size: action.payload.size,
        });
      }
      setValueToLocalStorage(state.value);
    },

    increaseQuantity: (state, action) => {
      const cartIndex = findIndex(state.value, action.payload);

      if (cartIndex >= 0) {
        state.value[cartIndex].quantity++;
        setValueToLocalStorage(state.value);
      }
    },

    decreaseQuantity: (state, action) => {
      const cartIndex = findIndex(state.value, action.payload);

      if (cartIndex >= 0 && state.value[cartIndex].quantity > 1) {
        state.value[cartIndex].quantity--;
        setValueToLocalStorage(state.value);
      }
    },

    removeFromCart: (state, action) => {
      const cartIndex = findIndex(state.value, action.payload);

      if (cartIndex >= 0) {
        state.value.splice(cartIndex, 1);
        setValueToLocalStorage(state.value);
      }
    },

    deleteCart: (state) => {
      state.value = [];
      setValueToLocalStorage(state.value);
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  deleteCart,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.value;

export const getCartTotal = (data) =>
  data.reduce((total, item) => {
    const priceDiscount =
      item.product.price - (item.product.price * item.product.discount) / 100;
    return total + priceDiscount * item.quantity;
  }, 0);

export const getCartQuantity = (data) =>
  data.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;
