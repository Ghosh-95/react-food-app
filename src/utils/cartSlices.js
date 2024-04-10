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
            state.item.splice(0, 1);
        }
    },
});

export default cartSlices;