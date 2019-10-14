import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http-service.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { UserNoPass, SubscriptionsIds } from 'src/app/CustomData.ts/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-subscriptions',
  templateUrl: './company-subscriptions.component.html',
  styleUrls: ['./company-subscriptions.component.css']
})
export class CompanySubscriptionsComponent implements OnInit {
 company:UserNoPass;
 Subscriptions=[];
 SubscriptionList=[];
  constructor(private httpService: HttpService,private tenderService: DataCommunicationService) { 
    this.tenderService.dataObject.subscribe(obj=>{this.company=obj;
      console.log("company",obj);
      
    });

  }

  ngOnInit() {
    this.httpService.getCompanyUserByID(this.company.id).subscribe(company=>{
      company.TenderingProcessesEntered.forEach(element => {
        console.log("element",element);
        this.Subscriptions.push({_id:element});
        
      });
      console.log("subs",this.Subscriptions);
      let subscribtiondata=JSON.stringify(this.Subscriptions)
      console.log("data",subscribtiondata);
      this.httpService.getTendersListbyId(subscribtiondata).subscribe(result=>{
        this.SubscriptionList=result;
        console.log("tenders",this.SubscriptionList);

      });
      
      

      
    });
  }

}

