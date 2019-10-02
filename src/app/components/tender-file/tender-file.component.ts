import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { TenderFile_Id, UserNoPass } from 'src/app/CustomData.ts/User';
import { HttpService } from 'src/app/Services/http-service.service';


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
 CheckboxCount:number;
 checked:boolean;
 deviceName:string;
 TenderData:any;
  constructor( private tenderService: DataCommunicationService,private httpService: HttpService) { 
    this.tenderService.transferObject.subscribe(tenderid=>{this.tenderfile_id=tenderid
    ;console.log("TenderFileID",this.tenderfile_id);});
    this.tenderService.dataObject.subscribe(obj=>{this.company=obj});
    console.log("company",this.company);
    this.httpService.getTenderById(this.tenderfile_id.tenderid).subscribe(tenderdata=>{
      this.deviceName=tenderdata.Device_Name;
      this.TenderData=tenderdata;
      console.log("tenderdata",tenderdata);
    });
 
  }

  ngOnInit() {
  
    
  }

  checkBox(){
    this.CheckboxCount++; 
    let checkboxs=(<HTMLInputElement><any>document.getElementsByName("inlineDefaultRadiosExample"));
      if ( checkboxs.checked) {
          
              this.CheckboxCount ++;
              console.log("checks",this.CheckboxCount);  
          
          
      }
  
  
 }

}
