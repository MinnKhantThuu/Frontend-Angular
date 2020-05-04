import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/sysgen/local.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private http: LocalService) { }

  ngOnInit(): void {
    this.http.getAdminCat().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
