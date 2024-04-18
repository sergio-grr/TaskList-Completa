export interface Task {
  id?:   string;
  name:  string;
  completed?: boolean;
}


export enum TaskStatus {
  TODO,
  DOING,
  DONE
}
