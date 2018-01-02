import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(
    private router: Router, 
    private user : UserService) {
      
     }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault;
    var username = e.target[0].value
    var password = e.target[1].value
    console.log(username, password)

    if(this.user.authenticateUser(username, password)){
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
  }
}
