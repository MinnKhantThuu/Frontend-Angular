import { Component, OnInit } from '@angular/core';
import {LocalService} from '../sysgen/local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  cats;
  constructor(private http : LocalService) { }

  ngOnInit(): void {
    this.http.getAllCat().subscribe(
      response => {
        if(response.con){
          this.loading = true;
          this.cats = response.msg;
          this.loading = false;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
