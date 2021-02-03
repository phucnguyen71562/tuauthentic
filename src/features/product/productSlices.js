import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from 'api/productApi';

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await productApi.fetchProducts();
    return response.data;
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const product = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

const { reducer } = product;
export default reducer;
