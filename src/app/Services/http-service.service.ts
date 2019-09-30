import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tender, tender } from '../CustomData.ts/User';

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

  getHospitalUserByID(Id): Observable<any>
  {
    const Url ="http://localhost:3000/hospital-users/"+Id;
    return this.http.get<any>(Url,this.httpOptions);

  }


  GetTenders():Observable<tender[]>{
    const Url ="http://[::1]:3000/tender-processes"
    return this.http.get<tender[]>(Url,this.httpOptions);
  }

  PostTenderSubscription(user:string): Observable<any>{
    const Url ="http://[::1]:3000/company-accept";
    return this.http.post<any>(Url, user, this.httpOptions);
  }
  RejectTender(tender:string):Observable<any>{
    const Url ="http://[::1]:3000/company-reject";
    return this.http.post<any>(Url, tender, this.httpOptions);

  }

}

