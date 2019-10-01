import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tender, tender } from '../CustomData.ts/User';

@Injectable({
  providedIn: 'root'
})



export class HttpService {
  localhost ="http://localhost:3000/";
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
    const Url =this.localhost+"users/login";
    return this.http.post<any>(Url, user, this.httpOptions);
  }


  getMe(token): Observable<any>
  {
    const httpOptions = {
      headers: this.httpGetTokenOptions(token)
    };
    const Url =this.localhost+"users/me";
    return this.http.get<any>(Url,httpOptions);

  }

  getCompanyUserByID(Id): Observable<any>
  {
    const Url =this.localhost+"company-users/"+Id;
    return this.http.get<any>(Url,this.httpOptions);

  }

  getHospitalUserByID(Id): Observable<any>
  {
    const Url =this.localhost+"hospital-users/"+Id;
    return this.http.get<any>(Url,this.httpOptions);

  }


  GetTenders():Observable<tender[]>{
    const Url =this.localhost+"tender-processes"
    return this.http.get<tender[]>(Url,this.httpOptions);
  }

  getCompanyNames():Observable<any>
  {
    const Url ="http://localhost:3000/company-users-names";
    return this.http.get<any>(Url,this.httpOptions);

  }



  postTender(data): Observable<any>
  {
    const Url ="http://localhost:3000/tender-process"
    console.log("url: "+Url);
    return this.http.post<any>(Url, data, this.httpOptions);

  }
  // getCompanyNames():Promise<Names[]>
  // {
  //   const Url =" http://localhost:3000/company-users-names";
  //   return this.http.get<Names[]>(Url,this.httpOptions)
  //   .map(response => {
  //     const array = JSON.parse(response.json()) as any[];
  //     return array;
  // })
  // .toPromise();

  // }
  PostTenderSubscription(user:string): Observable<any>{
    const Url =this.localhost+"company-submit";
    return this.http.post<any>(Url, user, this.httpOptions);
  }
  RejectTender(tender:string):Observable<any>{
    const Url =this.localhost+"company-reject";
    return this.http.post<any>(Url, tender, this.httpOptions);

  }
 getTenderbyId(tenderids:string):Observable<any>{
  const Url =this.localhost+"all-tender-processes";
  return this.http.post<any>(Url,tenderids,this.httpOptions);
 } 

}

