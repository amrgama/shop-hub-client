import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice"
import wishListReducer from "./features/wish-list/wishListSlice"

const store = configureStore({
    reducer: {
      cart: cartReducer,
      wishList: wishListReducer
    }
})

export default store;