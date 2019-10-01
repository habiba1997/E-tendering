import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { TenderFile_Id, UserNoPass } from 'src/app/CustomData.ts/User';
import { HttpService } from 'src/app/Services/http-service.service';
import { Alert } from 'selenium-webdriver';
import { isNull } from 'util';

@Component({
  selector: 'app-tender-file',
  templateUrl: './tender-file.component.html',
  styleUrls: ['./tender-file.component.css']
})
export class TenderFileComponent implements OnInit {
 tenderfile_id:TenderFile_Id;
 company:UserNoPass;
 companyData:any;
 trialfile=[1,2,3,4,5,6,7,8,9];
  constructor( private tenderService: DataCommunicationService,private httpService: HttpService) { 
    this.tenderService.transferObject.subscribe(tenderid=>{this.tenderfile_id=tenderid
    ;console.log("TenderFileID",this.tenderfile_id);});
    this.tenderService.dataObject.subscribe(obj=>{this.company=obj});
    console.log("company",this.company);
   
 
  }

  ngOnInit() {
  
    
  }
  AddCompanySubscribtion(){
    this.httpService.getCompanyUserByID(this.company.id).subscribe(company=>{this.companyData=company;
      console.log("company",company);
      if(isNull(this.companyData.TenderingProcessesAccepted)|| !this.companyData.TenderingProcessesAccepted.includes(this.tenderfile_id.tenderid)){
        let subscribtiondata=JSON.stringify(
            {
              companyId: this.company.id,
              tenderingProcessId: this.tenderfile_id.tenderid,
              numberOfFits: 0

            }
        );
        this.httpService.PostTenderSubscription(subscribtiondata).subscribe(result=>{
          console.log("subscribed");
          alert("You are successfully subscribed to this tender");
        });

      }
      else{
        console.log("already subscribed");
        alert("You are already subscribed");
        
      }
      
      
      
    });

    // 
    //   );
    //   console.log("subs data",subscribtiondata);
      
    //  this.httpService.PostTenderSubscription(subscribtiondata).subscribe(result=>{
    //    this.httpService.getCompanyUserByID(this.company.id).subscribe(company=>{
    //     console.log("company after subscribtion",company);
    //   });
    //  });
     

  }

}
