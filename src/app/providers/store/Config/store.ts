import { configureStore } from '@reduxjs/toolkit';

import { TasksReducer } from '@/entity/Task';
import { UserReducer } from '@/entity/User';

import { StateSchema } from './StateSchema';

export const createStore = (initialState?: StateSchema) =>
    configureStore({
        preloadedState: initialState,
        reducer: {
            user: UserReducer,
            tasks: TasksReducer,
        },
    });
