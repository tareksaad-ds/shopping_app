import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  items:[] 
}
export const  loadCart = createAsyncThunk('loadCart', async() => {
  const value = await AsyncStorage.getItem('cart-items');
  if (value !== null) {
    const cartItems = JSON.parse(value);
    if(Array.isArray(cartItems)){
      return cartItems;
    }
  }
  return [];     
});

export const syncCart = createAsyncThunk('addCartItem',  async (items) => {
   await AsyncStorage.setItem('cart-items', JSON.stringify(items));  
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload;
      const cartItem = state.items.find(
        (item) => item.product.id === newProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      }else {
        state.items.push({ product: newProduct, quantity: 1 }); 
      }
    },
    changeQuantity: (state, action) => {
      const {productId , amount} = action.payload;
      const cartItem = state.items.find(
       (item) => item.product.id === productId
      );
      if (cartItem) {
        cartItem.quantity += amount;
      }
      if (cartItem.quantity <= 0) {
        state.items = state.items.filter((item) => item !== cartItem);
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.product.id !== id);
    },
    clear: (state) => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(loadCart.fulfilled , (state, action) => {
      state.items = action.payload;
    });
  }
})
