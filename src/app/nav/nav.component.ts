import { Component, OnInit } from '@angular/core';
import { LocalService } from '../sysgen/local.service';
import { Loki } from '../sysgen/loki';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuth;
  constructor(private http:LocalService,private router:Router) { }

  ngOnInit(): void {
    this.http.authBool.subscribe(
      response =>{
        this.isAuth = response;
      }
    )
  }

  logout(){
    Loki.logout();
    this.router.navigate(['/']);
    this.http.changeAuth(false);
  }

}
