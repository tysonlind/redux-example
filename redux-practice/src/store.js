import { configureStore } from '@reduxjs/toolkit';
import firstReducer from './firstSlice';

export const store = configureStore({
    reucer: {
        first: firstReducer,
    },
});