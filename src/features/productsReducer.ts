import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    products: [] as any[],
    isLoading: false,
    error: ""
}
export const getProducts = createAsyncThunk('products/getProducts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response.json();
    }
)
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action: any) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action: any) => {
                state.error = action.payload;
            })
    }
})

export default productsSlice.reducer;