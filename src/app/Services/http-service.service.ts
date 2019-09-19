import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'

    })
  };
  httpGetTokenOptions(accessToken) {

    return new HttpHeaders({
      'Content-Type':  'application/json',
      "Authorization": "Bearer " + accessToken

    })
  };



  PostLogin(user:string): Observable<any>{
    const Url ="http://[::1]:3000/users/login";
    return this.http.post<any>(Url, user, this.httpOptions);
  }


  getMe(token): Observable<any>
  {
    const httpOptions = {
      headers: this.httpGetTokenOptions(token)
    };
    const Url ="http://[::1]:3000/users/me";
    return this.http.get<any>(Url,httpOptions);

  }

  getCompanyUserByID(Id): Observable<any>
  {
    const Url ="http://localhost:3000/company-users/"+Id;
    return this.http.get<any>(Url,this.httpOptions);

  }


}

