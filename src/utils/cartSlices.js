import { createSlice, current } from '@reduxjs/toolkit';

const cartSlices = createSlice({
    name: "cart",
    initialState: {
        item: [],
    },
    reducers: {
        addItem: function (state, action) {
            if (!current(state).item.includes(action.payload)) {
                state.item.push(action.payload);
            };
        },

        removeItem: function (state, action) {
            const indexToRemove = current(state).item.findIndex(it => it.id === action.payload.id);

            state.item.splice(indexToRemove, 1);
        },

        clearItem: function (state) {
            state.item.splice(0, state.item.length);
        }
    },
});

export const { addItem, removeItem, clearItem } = cartSlices.actions;

export default cartSlices.reducer;