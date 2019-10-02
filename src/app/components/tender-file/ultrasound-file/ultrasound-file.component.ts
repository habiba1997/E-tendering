import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/Services/http-service.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { UserNoPass } from 'src/app/CustomData.ts/User';
import { isNull } from 'util';
@Component({
  selector: 'app-ultrasound-file',
  templateUrl: './ultrasound-file.component.html',
  styleUrls: ['./ultrasound-file.component.css']
})
export class UltrasoundFileComponent implements OnInit {

@Input () Tender:any;
TenderSpecs:any;
Company:UserNoPass;
companyData:any;
NumofFits:number=0;


  PhysicalandErgonomicFeatures=[];
  ScanModes=[];
  probs: string;

  constructor(private httpService: HttpService ,private CompanyService: DataCommunicationService) { }

  ngOnInit() {
    console.log("From Ultrasound",this.Tender);
    //this.TenderSpecs=this.Tender.Device_Data;
    console.log("tender Specs",this.TenderSpecs);
    
    this.PhysicalandErgonomicFeatures = this.Tender.Device_Data.PhysicalandErgonomicFeatures;
    
    this.ScanModes = this.Tender.Device_Data.ScanModes;
    this.probs = this.Tender.Device_Data.probs;
    
    
    
  this.CompanyService.dataObject.subscribe(obj=>{this.Company=obj});
  }


  check(event){
    this.NumofFits=this.NumofFits+1;
    console.log("checked",this.NumofFits);
  }
  notcheck(event){
    this.NumofFits=this.NumofFits-1;
  }

  AddCompanySubscribtion(){

    this.httpService.getCompanyUserByID(this.Company.id).subscribe(company=>{this.companyData=company;
      console.log("company",company);
      if(isNull(this.companyData.TenderingProcessesEntered)|| !(this.companyData.TenderingProcessesEntered.includes(this.Tender._id))){
        let subscribtiondata=JSON.stringify(
            {
              companyId: this.Company.id,
              tenderingProcessId: this.Tender._id,
              numberOfFits: this.NumofFits

            }
        );
        this.httpService.PostTenderSubscription(subscribtiondata).subscribe(result=>{
          
          alert("You are successfully subscribed to this tender");
        });

      }
      else{        
        console.log("already subscribed");
        alert("You are already subscribed");
        
      }
      
      
      
    });
    
    

  }

}

