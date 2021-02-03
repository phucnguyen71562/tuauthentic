import { createSlice } from '@reduxjs/toolkit';
import { findIndexById } from 'utils/array';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    value: JSON.parse(localStorage.getItem('tu-favorite')) || [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const favoriteIndex = findIndexById(state.value, action.payload);

      if (favoriteIndex >= 0) {
        state.value.splice(favoriteIndex, 1);
      } else {
        state.value.push({
          id: action.payload.id,
          image: action.payload.image,
          name: action.payload.name,
          price: action.payload.price,
          discount: action.payload.discount,
          status: action.payload.status,
          link: action.payload.link,
        });
      }
      localStorage.setItem('tu-favorite', JSON.stringify(state.value));
    },
  },
});

export const { addToFavorite } = favoriteSlice.actions;

export const selectFavorite = (state) => state.favorite.value;

export default favoriteSlice.reducer;
