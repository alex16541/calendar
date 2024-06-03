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
