import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) { }

  addUser(data: any){
    return this.http.post(this.endpoint+"users", data);
  }
}
