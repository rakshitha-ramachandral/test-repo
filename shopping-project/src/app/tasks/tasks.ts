import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task";
import { NewTask } from "./new-task/new-task";
// import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true})  name!: string;
  // @Input()  name?: string; 
  // @Input()  name: string | undefined; 

  isAddingTask = false;
  isSubmitting = false;
  // c=0;
// private tasksService = new TasksService(); //creates an obj/instance of this class and used acress below functions of only this component.
  //but wouldn't reflect changes across other components using this service, because each component would have its own instance.
  //To share data across components, we need to provide this service at a higher level (e.g., in a module or root injector) so that all components use the same instance.

  // Method 1:
  // private tasksService: TasksService;
  // constructor (tasksService: TasksService) {
  // this.tasksService = tasksService; 
  // }

  // Method 2: (shorter syntax)
  constructor(private tasksService: TasksService) {} //Angular's DI system will provide the same instance of TasksService to all components that inject it.
  
// instead of constructor injection, we can also use inject function from @angular/core
// import { inject } from '@angular/core';
// private tasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(taskId: string){
  // }

  onAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }


  // onSubmitAddTask(taskData: NewTaskData){
  //   // this.c+=1;
  //   // console.log(this.c);
  //   // if(this.isAddingTask){
  //     this.tasks.push({
  //     id: new Date().getTime().toString(),
  //     userId: this.userId,
  //     title: taskData.title,
  //     summary: taskData.summary,
  //     dueDate: taskData.dueDate
  //   })
  // // };
  //   this.isAddingTask = false;
  // }
}

