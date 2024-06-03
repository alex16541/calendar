import { TasksSchema } from '@/entity/Task';
import { UserSchema } from '@/entity/User';

export interface StateSchema {
    user: UserSchema;
    tasks: TasksSchema;
}
