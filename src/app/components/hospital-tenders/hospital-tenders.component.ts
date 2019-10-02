import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http-service.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { UserNoPass, SubscriptionsIds } from 'src/app/CustomData.ts/User';
import { NavigationService } from 'src/app/Services/navigation.service';

@Component({
  selector: 'app-hospital-tenders',
  templateUrl: './hospital-tenders.component.html',
  styleUrls: ['./hospital-tenders.component.css']
})
export class HospitalTendersComponent implements OnInit {
 hospital:UserNoPass;
 hospitaData:any;
 SubscriptionList=[];
 Subscriptions =[];
  constructor(private httpservice :HttpService ,
    
    private navigate:NavigationService,
    
    private dateservice:DataCommunicationService) { }

  ngOnInit() {
    this.dateservice.dataObject.subscribe(user=>{
      this.hospital=user;
      console.log("hospital-user",this.hospital);
      this.httpservice.getHospitalUserByID(this.hospital.id).subscribe(data=>{
        this.hospitaData=data;
        console.log("hospital-data",this.hospitaData);
        this.hospitaData.TenderingProcessesCreated.forEach(element => {
          console.log("element",element);
          this.Subscriptions.push({_id:element});
          
        });
        console.log(this.Subscriptions);
        let subscribtiondata=JSON.stringify(this.Subscriptions);
        console.log("data",subscribtiondata);
        this.httpservice.getTendersListbyId(subscribtiondata).subscribe(result=>{
        this.SubscriptionList=result;
        console.log("tenders",this.SubscriptionList);
  
        });
        
      });
     
      
      

      
    });
  }


  sendTender(tender)
  {
    this.dateservice.getData(tender.Agreed);
    console.log(tender.Agreed);
    this.navigate.navigateTo("/agreed");
  }

}
