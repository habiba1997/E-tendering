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
  //Tender trial 
   Tenders:Tender[]=[{
    HospitalName:"Salam El Dowli",DeviceName:"MRI",Date:"20/05/2019",id:1},
   {HospitalName:"Salam El Dowli",DeviceName:"MRI",Date:"20/05/2019",id:2},
   {HospitalName:"Salam El Dowli",DeviceName:"MRI",Date:"30/06/2019",id:3},
   {HospitalName:"Salam El Dowli",DeviceName:"MRI",Date:"23/02/2019",id:4},
   {HospitalName:"Salam El Dowli",DeviceName:"MRI",Date:"10/05/2019",id:5},
   {HospitalName:"Salam El Dowli",DeviceName:"MRI",Date:"04/05/2019",id:6},
   {HospitalName:"Salam El Dowli",DeviceName:"MRI",Date:"03/05/2019",id:7},
   {HospitalName:"Salam El Dowli",DeviceName:"MRI",Date:"15/05/2019",id:8},
   {HospitalName:"Salam El Dowli",DeviceName:"MRI",Date:"18/05/2019",id:9}];

   
  

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

  getTenders(): Tender[]{
    return this.Tenders;

  }
  GetTenders():Observable<tender[]>{
    const Url ="http://[::1]:3000/tender-processes"
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

}

