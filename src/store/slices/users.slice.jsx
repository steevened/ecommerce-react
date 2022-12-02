import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getConfig from '../../helpers/getConfig'
import { setIsLoading } from './isLoading.slice'

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    postUsers: (state, action) => {
      return action.payload
    },
  },
})

export const postUsersThunk = (user) => (dispatch) => {
  dispatch(setIsLoading(true))
  axios
    .post(
      'https://e-commerce-api.academlo.tech/api/v1/users',
      user,
      getConfig()
    )
    .then(() => dispatch(postUsers()))
    .finally(() => dispatch(setIsLoading(false)))
    .catch((error) => console.log(error?.response.data))
}

export const { postUsers } = usersSlice.actions
export default usersSlice.reducer
