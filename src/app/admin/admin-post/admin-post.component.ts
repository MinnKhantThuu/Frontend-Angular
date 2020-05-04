import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/sysgen/local.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {
  page;
  pages;
  products;
  loading = true;
  constructor(private http: LocalService) { }

  ngOnInit(): void {
    this.pagePaginate(1);
  }

  reload(val) {
    if (val <= this.pages && val >= 1) {
      this.pagePaginate(val);
    }else{
      alert('Your page is not have');
    }
  }

  pagePaginate(start){
    this.http.paginateProduct(start, 30).subscribe(
      response => {
        if (response.con) {
          this.loading;
          this.products = response.msg.docs;
          this.page = response.msg.page;
          this.pages = response.msg.pages;
          this.loading = false;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
