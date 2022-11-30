import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getConfig from '../../helpers/getConfig'
import { setIsLoading } from './isLoading.slice'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    getCart: (state, action) => {
      return action.payload
    },
  },
})

export const getCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true))
  return axios
    .get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
    .then((res) => dispatch(getCart(res.data.data.cart.products)))
    .finally(() => dispatch(setIsLoading(false)))
    .catch((error) => console.log(error?.response.data))
}

export const { getCart } = cartSlice.actions

export default cartSlice.reducer
