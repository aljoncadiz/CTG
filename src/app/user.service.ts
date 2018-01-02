import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class UserService {

  private isUserLoggedIn;

  private currentUser;

  private users = [
    new User('admin', 'admin', 'Vera Honig', 'VH2315', 'Developer', 'SuperUser'),
    new User('user1', 'user1', 'Richard Clark', 'RC2761', 'Developer', 'User'),
    new User('user2', 'user2', 'Charles Slatzman', 'CS1782', 'Developer', 'SuperUser'),
    new User('user1', 'user1', 'Matthew Anderson', 'MA7281', 'QA', 'User'),
 ];

  constructor() { 
    this.isUserLoggedIn = false;
  }

  authenticateUser(username, password) : boolean
  {
  let user = this.users.filter((user) => {
      if(user.Username == username && user.Password == password){
        this.currentUser = user;
        return user;
      }  
    })
    return user.length != 0 ? true : false;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  getCurrentUser(){
    return this.currentUser;
  }
}
