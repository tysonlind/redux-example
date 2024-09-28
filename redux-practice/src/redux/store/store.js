import { configureStore } from '@reduxjs/toolkit';
import firstReducer from '../slices/firstSlice';

export const store = configureStore({
    reducer: {
        first: firstReducer,
    },
});