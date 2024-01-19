import { configureStore  } from "@reduxjs/toolkit";
import productSlice from "../productsSlice";
import { cartSlice } from "../cartSlice";
import { themeSlice } from "../themeSlice";


export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        theme: themeSlice.reducer,
    }
})