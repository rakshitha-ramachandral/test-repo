import { Component, Input, inject } from '@angular/core';

import { Task } from './task.model';
import { Card } from "../../shared-ui/card/card";
import { TasksService } from '../tasks.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
