import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from '../sysgen/local.service';
import { repeat } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id;
  products;
  constructor(private route:ActivatedRoute , private http:LocalService) {
    this.id =  route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.http.getAllProductById(this.id).subscribe(
      response =>{
        if(response.con){
          console.log(response.msg);
          this.products = response.msg;
        }else{
          console.log(response.msg);
        }
      },
      err =>{
        console.log(err);
      }
    )
  }

}
