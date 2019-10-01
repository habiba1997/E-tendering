import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-tender-form',
  templateUrl: './tender-form.component.html',
  styleUrls: ['../../app.component.css']
})
export class TenderFormComponent  {
  TenderFormTitle:string="New Tender Request"
  DevicesArray=[];
  Diathermy: boolean = true;
  Ultrasound: boolean = false;


  deviceValue:string="Diathermy";

  companiesSelected;


  constructor(
    private data:DataService,
  ) {
    this.DevicesArray = data.DevicesArray;
   }

   onDeviceSelection(args)
  {
    this.deviceValue=args;
    this.switch();    
  }

  switch()
  {
    switch(this.deviceValue) { 
      case "Ultrasound": { 
         this.Diathermy= false;
         this.Ultrasound=true; 
         break; 
      } 
      case "Diathermy": { 
        this.Diathermy= true;
        this.Ultrasound=false; 
        break; 
      } 
      default: { 
        this.Diathermy= true;
        this.Ultrasound=false; 
        break;  
      } 
   } 
  }






}
