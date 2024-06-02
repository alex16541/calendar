import { StateSchema } from '@/app/providers/store';

export const selectUser = (state: StateSchema) => state.user;
export const selectAuthData = (state: StateSchema) => state.user.authData;
