import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TasksSchema } from './TasksSchema';
import { Task } from './types';

const date = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;

const initialState: TasksSchema = {
    data: [
        {
            id: '1',
            text: 'Купить картошку',
            username: 'user',
            date,
        },
        {
            id: '2',
            text: 'Купить хлеб',
            username: 'user',
            date,
        },
        {
            id: '3',
            text: 'Купить макароны',
            username: 'user',
            date,
        },
        {
            id: '4',
            text: 'Сходить на работу',
            username: 'user',
            date,
        },
        {
            id: '5',
            text: 'Потратить ЗП',
            username: 'user',
            date,
        },
        {
            id: '6',
            text: 'Допилить фичу',
            username: 'admin',
            date,
        },
        {
            id: '7',
            text: 'Выпить кофе',
            username: 'admin',
            date,
        },
    ],
    _inited: false,
};

const saveTasksToLoacalStorage = (state: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(state));
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        init: (state) => {
            state.isLoading = true;

            const data = localStorage.getItem('tasks');

            if (data) state.data = JSON.parse(data);

            state.isLoading = false;
            state._inited = true;
        },
        addTask: (state, { payload }: PayloadAction<Task>) => {
            state.data.push({ ...payload, id: `${new Date().valueOf()}` });

            saveTasksToLoacalStorage(state.data);
        },
        deleteTask: (state, { payload }: PayloadAction<string>) => {
            const i = state.data.findIndex((task) => task.id === payload);

            if (i === -1) return;
            state.data.splice(i, 1);

            saveTasksToLoacalStorage(state.data);
        },
        toggleTask: (state, { payload }: PayloadAction<Task>) => {
            const i = state.data.findIndex((task) => task.id === payload.id);

            if (i === -1) return;
            state.data[i].complited = !state.data[i].complited;

            saveTasksToLoacalStorage(state.data);
        },
        setTask: (state, { payload }: PayloadAction<Task>) => {
            const i = state.data.findIndex((task) => task.id === payload.id);

            if (i === -1) return;
            state.data[i] = payload;

            saveTasksToLoacalStorage(state.data);
        },
    },
});

export const { actions: TasksActions, reducer: TasksReducer } = tasksSlice;
