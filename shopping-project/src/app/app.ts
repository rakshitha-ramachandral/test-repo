import { Component, signal } from '@angular/core';
// import {NgFor, NgIf} from '@angular/common';

import { Header } from "./header/header";
import { UserComponent } from "./user/user";
import { DUMMY_USERS } from './users-list';
import { Tasks } from "./tasks/tasks";
// import { Test } from './test';

@Component({
  selector: 'app-root',
  imports: [Header, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId ?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }

  // onSelectUser(id: string){
  //   console.log('Selected User: '+ id);
  // }


}
