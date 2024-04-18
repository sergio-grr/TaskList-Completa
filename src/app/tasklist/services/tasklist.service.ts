import { Injectable } from '@angular/core';
import { Task, TaskStatus } from '../interfaces/task.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor() {}




  getTasks(): Task[] {

    var tasks =  JSON.parse(localStorage.getItem('tasks') || "[]") as Task[];

    return tasks


  }

  getTasksByStatus(status: TaskStatus | undefined): Task[] {
    if (status === undefined) {
      return this.tasks; // Return all tasks if status is undefined
    } else if (status === TaskStatus.DONE) {
      return this.tasks.filter(task => task.completed);
    } else if (status === TaskStatus.TODO || status === TaskStatus.DOING) {
      return this.tasks.filter(task => !task.completed);
    } else {
      return [];
    }
  }


  onNewTask(task: Task): void {
    const newTask: Task = { id: uuid(), completed: false, ...task };
    var oldTask = this.getTasks()
    oldTask.push(newTask);
    this.saveTasks(oldTask);
  }

  onDeleteTaskById(id: string): void {
    this.saveTasks(this.getTasks().filter((task) => task.id != id))

  }


  onTaskCompletion(task: Task): void {

    var oldTask = this.getTasks()
    console.log(oldTask, "First");
    oldTask= oldTask.map(item => {
    if(item.id==task.id) {
      item.completed=task.completed;

    }
    console.log(oldTask);
    return item
  })
    this.saveTasks(oldTask);

  }

  private saveTasks(tasks : Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload()

  }

}
