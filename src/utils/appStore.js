import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './cartSlices';

const appStore = configureStore({
    reducer: {
        cart: cartSliceReducer,
    }
});

export default appStore;