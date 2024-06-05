import { createStore } from './store';

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
