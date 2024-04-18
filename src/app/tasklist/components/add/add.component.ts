import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'task-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  public onNewTask: EventEmitter<Task> = new EventEmitter<Task>();


  public task: Task = {
    name:'',
    completed:false
  };

  emitTask():void {
    event?.preventDefault()
    this.onNewTask.emit({...this.task});

    this.task.name = '';
    this.task.completed=false

  }


}
