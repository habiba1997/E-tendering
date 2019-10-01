import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserNoPass, CompanyTenders } from '../CustomData.ts/User';
import { companyOpenComp } from '../CustomData.ts/ directAndOpen';

@Injectable(  
)
export class DataCommunicationService {

    
    private dataObjectSource = new BehaviorSubject(new UserNoPass);
    dataObject = this.dataObjectSource.asObservable();
    
    private tenderObjectSource=new BehaviorSubject(new CompanyTenders );
    tenderObject = this.tenderObjectSource.asObservable();

    private companiesIdSource=new BehaviorSubject(new companyOpenComp);
    companiesIdObject = this.companiesIdSource.asObservable();

   
  

  constructor() { }


  getObject(user:UserNoPass) 
  {
    this.dataObjectSource.next({id:user.id, name: user.name, email:user.email});
  
  }
  getTenders(SharedTenders:CompanyTenders){
    this.tenderObjectSource.next({tenders:SharedTenders.tenders});
  }

 

  getCompanies(companiesId, direct: boolean, open:boolean)
  {
    this.companiesIdSource.next({ companiesId:companiesId,direct:direct,open:open});
  }


  

}
