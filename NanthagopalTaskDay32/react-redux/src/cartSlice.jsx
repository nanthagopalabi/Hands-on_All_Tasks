import { createSlice } from '@reduxjs/toolkit';
import CartItems from './CartItems';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: 0,
    reducers: {
        incrementCart: (state) => state + 1,
        decrementCart: (state) => state - 1,
        totalPrice: (state, action) => {
          state += action.payload;
          },
    },
});

export const { incrementCart, decrementCart, totalPrice } = cartSlice.actions; 
export default cartSlice.reducer;
