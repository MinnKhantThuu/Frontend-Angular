import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  BASE_URL = 'http://localhost:3000/';
  catUrl = this.BASE_URL + 'cats';
  detailUrl = this.BASE_URL + 'cat/';
  loginUrl = this.BASE_URL + "user/api/login";
  adminCatUrl = this.BASE_URL + 'admin/cat/all';
  galleryAllUrl = this.BASE_URL + 'admin/gallery/all';
  createImageUrl = this.BASE_URL + 'admin/image/upload';
  deleteImageUrl = this.BASE_URL + 'admin/image/delete/';
  adminPaginateUrl = this.BASE_URL + 'admin/product/paginate/';
  adminProductCreateUrl = this.BASE_URL + 'admin/product/create';

  isAuth = new Subject<boolean>();
  authBool = this.isAuth.asObservable();

  constructor(private http: HttpClient) {

  }

  adminProductCreate(data){
    return this.http.post(this.adminProductCreateUrl,data).pipe(
      map(
        (response:any)=>response
      )
    )
  }

  paginateProduct(start,count){
    let paginate = this.adminPaginateUrl + start + '/' + count;
    return this.http.get(paginate).pipe(
      map(
        (response : any) => response
      )
    )
  }

  deleteImage(id){
    let imageurl = this.deleteImageUrl +id;
    return this.http.get(imageurl).pipe(
      map(
        (response : any) => response
      )
    )
  }

  uploadImage(data){
    return this.http.post(this.createImageUrl,data).pipe(
      map(
        (response : any) => response
      )
    )
  }

  getAdminGallery(){
    return this.http.get(this.galleryAllUrl).pipe(
      map(
        (response : any) => response
      )
    )
  }

  getAdminCat(){
    return this.http.get(this.adminCatUrl).pipe(
      map(
        (response : any) => response
      )
    )
  }

  changeAuth(val){
    this.isAuth.next(val);
  }

  getAllCat(){
    return this.http.get(this.catUrl).pipe(
     map(
       (response : any) => response
     )
    )
  };

  getAllProductById(id){
    return this.http.get(this.detailUrl + id).pipe(
      map(
        (response : any) => response
      )
    )
  }


  loginUser(data){
    return this.http.post(this.loginUrl,data).pipe(
      map(
        (response : any) => response
      )
    )
  }

}
