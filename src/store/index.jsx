import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart.slice'
import isLoadingSlice from './slices/isLoading.slice'
import productsSlice from './slices/products.slice'
import purchasesSlice from './slices/purchases.slice'
import usersSlice from './slices/users.slice'

export default configureStore({
  reducer: {
    products: productsSlice,
    isLoading: isLoadingSlice,
    purchases: purchasesSlice,
    cart: cartSlice,
    users: usersSlice,
  },
})
