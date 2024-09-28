import { configureStore } from '@reduxjs/toolkit';
import firstReducer from '../taskservice/taskSlice';

export const store = configureStore({
    reducer: {
        first: firstReducer,
    },
});