import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, { payload }) => {
      const item = state.items.find(item => item.id === payload.id);
      if (item) item.quantity += 1;
      else state.items.push({ ...payload, quantity: 1 });
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    updateQuantity: (state, { payload }) => {
      const item = state.items.find(item => item.id === payload.id);
      if (!item) return;
      if (payload.quantity <= 0) state.items = state.items.filter(item => item.id !== payload.id);
      else item.quantity = payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
