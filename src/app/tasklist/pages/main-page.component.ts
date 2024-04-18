import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { TaskService } from '../services/tasklist.service';

@Component({
  selector: 'app-tasklist-main',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent implements OnInit{


  constructor(public tasklistService: TaskService ) {

  }
  ngOnInit(): void {
    this.getTask()

  }

  taskList : Task[] = []
  taskDone : Task[] = []
  taskDoing : Task[] = []


  getTask(){
   this.taskList= this.tasklistService.getTasks()


     this.taskList.forEach( item =>
    item.completed==true ?  this.taskDone.push(item) : this.taskDoing.push(item)
   )

  }

 }

