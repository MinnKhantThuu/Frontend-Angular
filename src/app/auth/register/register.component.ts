import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name' : new FormControl(),
      'email' : new FormControl(),
      'password' : new FormControl()
    })
  }

  getData(data){
    console.log(data);
  }

}
