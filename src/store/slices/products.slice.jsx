import { createSlice } from '@reduxjs/toolkit'
import { setIsLoading } from './isLoading.slice'
import axios from 'axios'

export const products = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload
    },
  },
})

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true))
  axios
    .get('https://e-commerce-api.academlo.tech/api/v1/products')
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .catch((error) => error?.response?.data)
    .finally(() => dispatch(setIsLoading(false)))
}

export const filterThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true))
  axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
    .then((res) => dispatch(setProducts(res.data.data.products)))
    // .catch((error) => error?.response?.data)
    .finally(() => dispatch(setIsLoading(false)))
}

export const filterHeadThunk = (inputSearch) => (dispatch) => {
  dispatch(setIsLoading(true))
  axios
    .get(
      `https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}`
    )
    .then((res) => dispatch(setProducts(res.data.data.products)))
    // .catch((error) => error?.response?.data)
    .finally(() => dispatch(setIsLoading(false)))
}

export const { setProducts } = products.actions

export default products.reducer
