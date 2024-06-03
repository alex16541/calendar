import { Task } from './types';

export interface TasksSchema {
    data: Task[];
    isLoading?: boolean;
    error?: string;
    _inited: boolean;
}
