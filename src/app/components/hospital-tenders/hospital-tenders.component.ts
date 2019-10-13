import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http-service.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { UserNoPass, SubscriptionsIds } from 'src/app/CustomData.ts/User';
import { NavigationService } from 'src/app/Services/navigation.service';
import { submit } from 'src/app/CustomData.ts/ directAndOpen';

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
 
    if(tender.Agreed ==  undefined)
    {
      alert("Sorry NO companies have submitted their Tenders YET")
    }
    else
    {
      // let submitArray = [];
      // const arr = tender.Agreed;
      // for(var i =0; i < arr.length; i++)
      // {
      
      //   const submitObj = new submit;

      //   submitObj.companyId = arr[i].companyId;
      //   submitObj.companyName = arr[i].companyName;
      //   submitObj.numberOfFits = arr[i].numberOfFits;
      //   submitObj.tenderingProcessId = arr[i].tenderingProcessId;
      //   submitObj.winner = false;
        
      //   console.log("Data: "+ JSON.stringify(submitObj));

      //   submitArray[i]= submitObj;
      //   console.log("Array: "+ JSON.stringify(submitArray));

      // } 
      

     this.dateservice.getData(tender.Agreed);    

    }
    
    this.navigate.navigateTo("/agreed");

  }

}
