import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../CustomData.ts/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class DataServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      
    })
  };
  // put your server url here 
  UserUrl:string;
  // custom datatype
  User:User;
  

  constructor(private http:HttpClient) { }
 //login post request 
  Login(user:User): Observable<User>{
    return this.http.post<User>(this.UserUrl, user, this.httpOptions);

  }
}

