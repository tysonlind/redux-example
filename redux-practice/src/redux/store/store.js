import { configureStore } from '@reduxjs/toolkit';
import firstReducer from '../taskService/taskSlice';

export const store = configureStore({
    reducer: {
        first: firstReducer,
    },
});