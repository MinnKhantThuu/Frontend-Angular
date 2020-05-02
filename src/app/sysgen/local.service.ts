import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  BASE_URL = 'http://localhost:3000/';
  catUrl = this.BASE_URL + 'cats';
  detailUrl = this.BASE_URL + 'cat/';

  constructor(private http: HttpClient) {

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
}
