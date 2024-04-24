import { createSlice, current } from '@reduxjs/toolkit';

const cartSlices = createSlice({
    name: "cart",
    initialState: {
        item: [],
    },
    reducers: {
        addItem: function (state, action) {
            action.payload.quantity = 1;
            const { quantity, price, imageId, defaultPrice, name, id } = action.payload
            const index = current(state).item.findIndex(it => it.id === action.payload.id);
            if (index < 0) state.item.push({ imageId, quantity, price, defaultPrice, name, id });
        },

        removeItem: function (state, action) {
            const indexToRemove = current(state).item.findIndex(it => it.id === action.payload.id);

            state.item.splice(indexToRemove, 1);
        },

        clearItem: function (state) {
            state.item.splice(0, state.item.length);
        },

        incrementQuantity: function (state, action) {

        }
    },
});

export const { addItem, removeItem, clearItem, incrementQuantity } = cartSlices.actions;

export default cartSlices.reducer;