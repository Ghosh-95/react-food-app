import { createSlice } from '@reduxjs/toolkit';

const cartSlices = createSlice({
    name: "cart",
    initialState: {
        item: [],
    },
    reducers: {
        addItem: function (state, action) {
            state.item.push(action.payload);
        },

        // TODO: Change the removeItem and clearItem methods
        removeItem: function (state) {
            state.item.pop();
        },

        clearItem: function (state) {
            state.item.length = 0;
        }
    },
});

export const { addItem, removeItem, clearItem } = cartSlices.actions;

export default cartSlices.reducer;