import { ProjectsSchema } from "@/entity/Project";
import { TasksSchema } from "@/entity/Task";
import { UserSchema } from "@/entity/User";

export interface StateSchema {
  user: UserSchema;
  projects: ProjectsSchema;
  tasks: TasksSchema;
}
