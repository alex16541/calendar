import { configureStore } from '@reduxjs/toolkit';

import { UserReducer } from '@/entity/User';

const store = configureStore({
    reducer: {
        user: UserReducer,
    },
});

export default store;
