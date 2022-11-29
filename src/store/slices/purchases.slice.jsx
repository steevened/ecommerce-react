import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setIsLoading } from './isLoading.slice'
import getConfig from '../../helpers/getConfig'

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: [],
  reducers: {
    setPurchases: (state, action) => {
      return action.payload
    },
  },
})

export const getPurchasesThunk = () => (dispatch) => {
  dispatch(setIsLoading(true))
  return axios
    .get('https://e-commerce-api.academlo.tech/api/v1/purchases', getConfig())
    .then((res) => dispatch(setPurchases(res.data.data.purchases)))
    .finally(() => dispatch(setIsLoading(false)))
    .catch((error) => console.log(error?.response.data))
}

export const { setPurchases } = purchasesSlice.actions

export default purchasesSlice.reducer
