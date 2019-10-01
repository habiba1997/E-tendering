import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { DatePipe } from '@angular/common';
import { HttpService } from 'src/app/Services/http-service.service';
import { NavigationService } from 'src/app/Services/navigation.service';

@Component({
  selector: 'app-ultrasound-form',
  templateUrl: './ultrasound-form.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class UltrasoundFormComponent  {

  PhysicalandErgonomicFeature:string;
  PhysicalandErgonomicFeaturesArray=["Room based wheeled unit",
"Screen with ultrasound image area f.o.v. 12cm x 15 cm with a matrix of 512 x 512 and effective pixel size of no less than 500",
"Slave Monitor", "Flexible Position Monitor (height and angle)",
"Flexible position control console (height and angle)", "Subdued console lighting"
];
PhysicalandErgonomicFeatures=[];
ScanModesArray=["B-Mode", "Tissue Harmonic Imaging", "Spatial Image Compounding",
 "M-Mode" , "Colour & Power Doppler", "Spectral Doppler" , "3-D Imaging","Real-Time 3-D", "Split Screen Imaging"];
ScanModes=[];

  countryOfOrigin;
  countriesArray;

  probs:string;
 
  FDA:boolean;
  myDeadDate;

  companiesSelected;
  Date;
Open:boolean;
Direct:boolean;

  constructor(
    private datePipe: DatePipe,
    private data : DataService,
    private dataCom:DataCommunicationService,
    private http:HttpService,
    private navigate:NavigationService
    ) {
      let myDate = new Date();
      this.countriesArray=data.countries;  
      this.dataCom.companiesIdObject.subscribe(object => 
        {
          if(!object.companiesId) this.navigate.navigateTo("./tender");
          this.companiesSelected = object.companiesId;
          this.Open = object.open;
          this.Direct = object.direct;
        });    
        this.Date = this.datePipe.transform(myDate, 'yyyy-MM-dd');
   }

   onProbsChange(value)
   {
      this.probs= value;
   }

   onFScanModesSelection(checked,value)
   {
    if(checked)
    {
      this.ScanModes.push(value);
    }
    else{
      this.remove(this.ScanModes,value);
    }  

   }


   onFeatureSelection(checked,value)
   {
    if(checked)
    {
      this.PhysicalandErgonomicFeatures.push(value);
    }
    else{
      this.remove(this.PhysicalandErgonomicFeatures,value);
    }   }

    remove(array:string[],removedObject:string):string[]
    {
      var pos = array.indexOf(removedObject);
      // Remove an item by index position
      var removedItem = array.splice(pos, 1);
      return array;
    }
      
print()
{
  console.log(this.countryOfOrigin);    
  console.log(this.PhysicalandErgonomicFeatures);
  console.log(this.probs);

  console.log(this.FDA);
  console.log(this.Date)
  console.log(this.myDeadDate);
  console.log(this.Open)
  console.log(this.Direct)
  console.log(this.companiesSelected);
}
   Submit() {
     console.log(this.obj());
  this.http.postTender(this.obj()).subscribe(user => {console.log("token",user);});
  }

  obj()
  {
    return {

      "Issued_Hospital_ID": "5d83ecbe91fed14ee103b3ab",
      "Device_Name": "Diathermy",
      "Device_Data": {	
            "countryOfOrigin":this.countryOfOrigin,
           
            
         
          
            "FDACertified":this.FDA
    },
      "startDate": this.Date,
      "deadlineDate": this.myDeadDate,
     "Direct_Process": this.Open,
      "Open_Process": this.Direct,
      "Companies_Selected":this.companiesSelected
    
    
    };
  }


  onFDAChange(value)
  {
    this.FDA = value
  }


}
