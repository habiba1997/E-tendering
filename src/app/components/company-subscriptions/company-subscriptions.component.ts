import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http-service.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { UserNoPass } from 'src/app/CustomData.ts/User';

@Component({
  selector: 'app-company-subscriptions',
  templateUrl: './company-subscriptions.component.html',
  styleUrls: ['./company-subscriptions.component.css']
})
export class CompanySubscriptionsComponent implements OnInit {
 company:UserNoPass;
  constructor(private httpService: HttpService,private tenderService: DataCommunicationService) { 
    this.tenderService.dataObject.subscribe(obj=>{this.company=obj;
      console.log("company",obj);
      
    });

  }

  ngOnInit() {
    this.httpService.getCompanyUserByID(this.company.id).subscribe(company=>{
      console.log(company);
    });
    
    

  }

}
