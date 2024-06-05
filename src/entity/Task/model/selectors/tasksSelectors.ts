import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/store';

export const selectTaskState = (state: StateSchema) => state.tasks;

export const selectTask = (id: string) => (state: StateSchema) =>
    state.tasks.data.find((task) => task.id === id) ?? null;

export const selectAllTasks = (state: StateSchema) => state.tasks.data;

export const selectTasksByUser = (username?: string) =>
    createSelector([selectAllTasks], (t) => {
        return t.filter((t) => t.username === username);
    });

export const selectTaskById = (id?: string) =>
    createSelector([selectAllTasks], (t) => {
        return t.find((t) => t.id === id);
    });

export const selectUserTasksByDate = (date: string, username?: string) =>
    createSelector([selectTasksByUser(username)], (userTasks) => {
        return userTasks.filter((t) => t.date === date);
    });
