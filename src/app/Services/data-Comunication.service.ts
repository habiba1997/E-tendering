import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserNoPass } from '../CustomData.ts/User';

@Injectable(  
)
export class DataCommunicationService {

    
    private dataObjectSource = new BehaviorSubject(new UserNoPass);

    dataObject = this.dataObjectSource.asObservable();
  

  constructor() { }


  getObject(user:UserNoPass) 
  {
    this.dataObjectSource.next({id:user.id, name: user.name, email:user.email});
  
  }

}
