import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "./UserSchema";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<string>) => {
      state.authData = { login: payload };
    },
    logout: (state) => {
      state.authData = undefined;
    },
  },
});

export const { actions: UserActions, reducer: UserReducer } = userSlice;
