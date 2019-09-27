import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-diathermy-form',
  templateUrl: './diathermy-form.component.html',
  styleUrls: ['../../../app.component.css']
})
export class DiathermyFormComponent{
  countryOfOrigin:string;
  countriesArray=[];
  polarity:string;
  compatibility:string;
  Alarm:string;
  PowerRange = 300;
  CogPowerRange=60;
  FDA:string;

  constructor(
    private data : DataService
  ) {
      this.countriesArray=data.countries;      
   }

   templateForm() {
    console.log(this.countryOfOrigin);    
    console.log(this.polarity);
    console.log(this.compatibility);
    console.log(this.Alarm);
    console.log(this.PowerRange); 
    console.log(this.CogPowerRange);
    console.log(this.FDA);
  }

  onPolarityChange(value)
  {
    this.polarity = value
  }
  onCompatibilitychange(value)
  {
    this.compatibility=value;
  }
  onAlarmchange(value)
  {
    this.Alarm=value;
  }
  powerRangeChange(PowerRange)
  {
    this.PowerRange = PowerRange;
  }
  powerCoagulationRangeChange(CogPowerRange)
  {
    this.CogPowerRange = CogPowerRange;

  }
  onFDAChange(value)
  {
    this.FDA= value;
  }

}
