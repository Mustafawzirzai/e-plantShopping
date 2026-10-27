import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, { payload }) => {
      const item = state.items.find(item => item.name === payload.name);
      if (item) item.quantity += 1;
      else state.items.push({ ...payload, quantity: 1 });
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(item => item.name !== payload);
    },
    updateQuantity: (state, { payload }) => {
      const { name, quantity } = payload;
      const item = state.items.find(item => item.name === name);
      if (!item || !Number.isInteger(quantity)) return;
      if (quantity <= 0) state.items = state.items.filter(item => item.name !== name);
      else item.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
