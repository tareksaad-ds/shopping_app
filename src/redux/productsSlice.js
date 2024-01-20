import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Fetch All Products from FakeStoreAPI
export const fetchAllProducts = createAsyncThunk(
    `fetchProducts`,
    async (skip = 0) => {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
        const data = await response.json();
        return { products: data.products, isAppend: skip !== 0};
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
            if (action.payload.isAppend) {
                state.products = [ ...state.products, ...action.payload.products ];
            } else {
                state.products = action.payload.products;
            }
            state.status = 'success';
        });
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.status = 'failed';
        });
    }
})
export default productSlice;