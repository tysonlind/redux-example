import { configureStore } from '@reduxjs/toolkit';
import firstReducer from './firstSlice';

export const store = configureStore({
    reducer: {
        first: firstReducer,
    },
});