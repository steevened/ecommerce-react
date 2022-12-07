import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../helpers/getConfig';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    getCart: (state, action) => {
      return action.payload;
    },
  },
});

export const getCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
    .then((res) => dispatch(getCart(res.data.data.cart.products)))
    .finally(() => dispatch(setIsLoading(false)));
  // .catch((error) => console.log(error?.response.data))
};

export const postCartThunk = (product) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      'https://e-commerce-api.academlo.tech/api/v1/cart',
      product,
      getConfig()
    )
    .then(() => dispatch(getCartThunk()))
    .finally(() => dispatch(setIsLoading(false)));
};

export const checkoutThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      'https://e-commerce-api.academlo.tech/api/v1/purchases',
      {},
      getConfig()
    )
    .then(() => dispatch(getCart([])))
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteItemThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `https://e-commerce-api.academlo.tech/api/v1/cart/${id}`,
      getConfig()
    )
    .then(() => dispatch(getCartThunk()))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { getCart } = cartSlice.actions;

export default cartSlice.reducer;
