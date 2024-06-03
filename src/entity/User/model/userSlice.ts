import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserSchema } from './UserSchema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        init: (state) => {
            const authData = localStorage.getItem('authData');

            if (authData) state.authData = JSON.parse(authData);
        },
        login: (state, { payload }: PayloadAction<string>) => {
            state.authData = {
                login: payload,
                avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-1024.png',
            };

            localStorage.setItem('authData', JSON.stringify(state.authData));
        },
        logout: (state) => {
            state.authData = undefined;

            localStorage.removeItem('authData');
        },
    },
});

export const { actions: UserActions, reducer: UserReducer } = userSlice;
