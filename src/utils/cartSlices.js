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

        removeItem: function (state, action) {
            state.item.splice(state.item.indexOf(action.payload), 1);
        },

        clearItem: function (state) {
            state.item.splice(0, state.item.length);
        }
    },
});

export const { addItem, removeItem, clearItem } = cartSlices.actions;

export default cartSlices.reducer;