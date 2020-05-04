import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalService } from 'src/app/sysgen/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  createForm;
  cats;
  constructor(private http:LocalService,private router:Router) { }

  ngOnInit(): void {
    this.http.getAdminCat().subscribe(
      response =>{
        if(response.con){
          console.log(response.msg);
          this.cats = response.msg;
        }
      },
      error => {

      }
    )
    this.createForm = new FormGroup({
      'cat_id' : new FormControl('',Validators.required),
      'name' : new FormControl('',Validators.required),
      'price' : new FormControl('',Validators.required),
      'image' : new FormControl('',Validators.required),
      'desc' : new FormControl('',Validators.required),
    })
  }

  createData(data){
    this.http.adminProductCreate(data).subscribe(
      response=>{
        if(response.con){
          console.log(response.msg);
          alert('Successfully create');
          this.router.navigate(['/admin/post/all']);
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

}

/*
 cat_id : req.body.cat_id,
            name : req.body.name,
            price : req.body.price,
            image : req.body.image,
            description : req.body.description
            */
