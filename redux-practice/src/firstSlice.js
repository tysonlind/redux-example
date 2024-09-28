import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks:[
        { task: 'learn redux', priority: 'low' },
        { task: 'learn creational design patterns', priority: 'low' },
        { task: 'learn structural design patterns', priority: 'low' },
        { task: 'learn behavioral design patterns', priority: 'low' }
      ]
};

export const firstSlice = createSlice({
    name: 'first',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload];
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task, index) => task.task !== action.payload);
        }
    }
});

export const { addTask, removeTask } = firstSlice.actions;

export default firstSlice.reducer;