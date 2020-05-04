import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/sysgen/local.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.css']
})
export class AdminGalleryComponent implements OnInit {
  images;
  constructor(private http: LocalService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.http.getAdminGallery().subscribe(
      response => {
        if (response.con) {
          console.log(response.msg);
          this.images = response.msg;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  toCreate() {
    this.router.navigate(['/admin/gallery/create']);
  }

  delete(id) {
    this.http.deleteImage(id).subscribe(
      response => {
        if (response.con) {
          alert('Successfully Deleted');
          this.router.navigate(['/admin/gallery/create']);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  copyImage(image){
    let copyImage = 'http://localhost:3000/uploads/' + image;
    let input = document.createElement('input');
    input.value = copyImage;
    document.body.appendChild(input);
    input.select();
    document.execCommand('cut');
    document.body.removeChild(input);
  }

}
