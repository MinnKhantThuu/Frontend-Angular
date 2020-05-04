import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { LocalService } from 'src/app/sysgen/local.service';
import { Loki } from 'src/app/sysgen/loki';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm;
  constructor(private http:LocalService ,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email' : new FormControl('',Validators.compose([
        Validators.required,
        Validators.email
      ])),
      'password' : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }

 getData(data){
   this.http.loginUser(data).subscribe(
     response =>{
       if(response.con){
         Loki.save(response.token);
         this.http.changeAuth(true);
         this.router.navigate(['admin']);
       }else{
         alert("False Condition")
       }
     },
     error =>{
       alert("Your email or password is wrong")
     }
   )
 }

}
