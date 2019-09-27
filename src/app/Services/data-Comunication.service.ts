import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserNoPass, tender, CompanyTenders } from '../CustomData.ts/User';

@Injectable(  
)
export class DataCommunicationService {

    private dataObjectSource = new BehaviorSubject(new UserNoPass);

    dataObject = this.dataObjectSource.asObservable();
    private tenderObjectSource=new BehaviorSubject(new CompanyTenders );
    tenderObject = this.tenderObjectSource.asObservable();
  

  constructor() { }


  getObject(user:UserNoPass) 
  {
    this.dataObjectSource.next({id:user.id, name: user.name, email:user.email});
  
  }
  getTenders(SharedTenders:CompanyTenders){
    this.tenderObjectSource.next({tenders:SharedTenders.tenders});
  }

}
