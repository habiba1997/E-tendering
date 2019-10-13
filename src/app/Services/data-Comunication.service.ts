import { Injectable } from '@angular/core';
import { companyOpenComp, sendToSubscribe, submit } from '../CustomData.ts/ directAndOpen';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserNoPass, tender, CompanyTenders, TenderFile_Id } from '../CustomData.ts/User';

@Injectable(  
)
export class DataCommunicationService {

    
    private dataObjectSource = new BehaviorSubject(new UserNoPass);
    dataObject = this.dataObjectSource.asObservable();
    
    private tenderObjectSource=new BehaviorSubject(new CompanyTenders );
    tenderObject = this.tenderObjectSource.asObservable();

    private companiesIdSource=new BehaviorSubject(new companyOpenComp);
    companiesIdObject = this.companiesIdSource.asObservable();

   
    private datatransferObject= new BehaviorSubject(new TenderFile_Id);
    transferObject = this.datatransferObject.asObservable();


      
    private dataSource= new BehaviorSubject<Array<submit>>([]);
    dataSourceObject = this.dataSource.asObservable();
  
  

  constructor() { }


  getObject(user:UserNoPass) 
  {
    this.dataObjectSource.next({id:user.id, name: user.name, email:user.email});
  
  }
  getTenders(SharedTenders:CompanyTenders){
    this.tenderObjectSource.next({tenders:SharedTenders.tenders});
  }
  getTenderFile (item:tender){
    console.log(item);
    this.datatransferObject.next({tenderid:item._id});
   
  }
 getData(sendToSubscribe)
 {
    this.dataSource.next(sendToSubscribe);
 }

 

  getCompanies(companiesId, direct: boolean, open:boolean)
  {
    this.companiesIdSource.next({ companiesId:companiesId,direct:direct,open:open});
  }


  

}
