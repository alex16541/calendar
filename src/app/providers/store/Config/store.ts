import { configureStore } from '@reduxjs/toolkit';

import { TasksReducer } from '@/entity/Task';
import { UserReducer } from '@/entity/User';

const store = configureStore({
    reducer: {
        user: UserReducer,
        tasks: TasksReducer,
    },
});

export default store;
