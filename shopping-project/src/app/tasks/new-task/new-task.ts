import { Component, Input, Output, EventEmitter, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter();
  // @Output() submit = new EventEmitter<NewTaskData>(); not emitting as we use taskservice now
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  // same 2 way binding using signals - html remains same as earlier
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  private tasksService = inject(TasksService)

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      },
this.userId
    );
this.close.emit();
  }
}
