import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Fetch All Products from FakeStoreAPI
export const fetchAllProducts = createAsyncThunk(
    `fetchProducts`,
    async() => {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();
        return data;
    }
) 

const initialState = {
    products: [],
    selectedProduct:null,
    status: null,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        //To Get Single Product Details
        setSelectedProduct: (state, action) => {
            const productId = action.payload;
            state.selectedProduct = state.products.find((p) => p.id === productId);
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAllProducts.fulfilled ,(state, action) => {
            state.products = action.payload.products,
            state.status = 'success'
        });
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.status = 'loading'
        });
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.status = 'failed'
        });
    }
})
export default productSlice;