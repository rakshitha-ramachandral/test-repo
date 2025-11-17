import { Component, Input, Output, computed, EventEmitter } from '@angular/core';
import { Card } from "../shared-ui/card/card";

// import{input, output, computed, signal} from '@angular/core';
// import { type User } from './user.model';
// import { DUMMY_USERS } from '../users-list';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); //--no need of random change in user--

// type User = {
//     id: string;
//     avatar: string;
//     name: string;
//   }; //creating an object type for re-usability, using type feature

interface User{
  id: string;
  avatar: string;
  name: string;
} //creating object type using interface feature

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  @Input({required: true}) user!: User; //input property to accept user object from parent component
  @Input({required: true}) selected !: boolean;

  // @Input() user = input.required<{
  // @Input({required: true}) id!: string; 
  // @Input({
  //   required: true    //is mandatory required to give value somewhere in code.
  // }) avatar!: string; //added @input deco to property avatar and required is a config in input deco.
  // @Input() name!: string; //! tells that the initial value will be assigned later. : is used to define type of property.

  @Output() select = new EventEmitter<string>(); //event emitter to create custom event and pass it to parent component, no signal, output deco used.

  // select = output<string>(); //output function to create custom event and pass it to parent component, no signal, but new.

  //accept input to get input
  // avatar = input.required<string>(); //required input property of type string
  // name = input.required<string>(); //required input property of type string

  get imagePath() {
    return 'assets/users/' + this.user.avatar; //--- without signal ---
  }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.user.avatar; 
  // }); //--- with signal ---

  onSelectUser(){
    this.select.emit(this.user.id); //emit event with data to parent component
  }

  // selectedUser = DUMMY_USERS[randomIndex]; //--- without signal ---
  // selectedUser = signal(DUMMY_USERS[randomIndex]); //--- with signal ---
  // imagePath = computed(() => 'assets/users/' + this.SelectUser.avatar()); //--- with signal ---

  //Using getter instead of signal for computed property
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar; //--- without signal ---
  // }

  // onSelectUser() {
  //   console.log('Clicked');
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]); //--- with signal ---
  //   this.selectedUser = DUMMY_USERS[randomIndex]; //--- without signal ---
  // }

}
