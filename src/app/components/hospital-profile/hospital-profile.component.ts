import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { NavigationService } from 'src/app/Services/navigation.service';
import { UserNoPass } from 'src/app/CustomData.ts/User';

@Component({
  selector: 'app-hospital-profile',
  templateUrl: './hospital-profile.component.html',
  styleUrls: ['./hospital-profile.component.css']
})
export class HospitalProfileComponent implements OnInit {
  Object: UserNoPass;

  constructor(
    private dataCom : DataCommunicationService,
    private navigate:NavigationService,
    ) {
     
      this.dataCom.dataObject.subscribe(object => 
        { 
          
         if(!object.email) this.navigate.navigateTo('/login'); 
         else this.Object = object;
        });
  
    }
  

  ngOnInit() {
  }

}
