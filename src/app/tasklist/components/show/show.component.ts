import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskStatus } from '../../interfaces/task.interface';
import { TaskService } from '../../services/tasklist.service';

@Component({
  selector: 'task-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  @Input() taskList: Task[] = [];

  @Input()
  public status: TaskStatus | undefined;

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public localStorageTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
console.log(this.taskList);


  }

  onDeleteTask(id?: string): void {
    if (!id) return;
console.log('delete');

    this.taskService.onDeleteTaskById(id);
    this.onDelete.emit(id);
  }

  onTaskCompletion(task: Task): void {
    console.log(task);
    this.taskService.onTaskCompletion(task);
  }
}
