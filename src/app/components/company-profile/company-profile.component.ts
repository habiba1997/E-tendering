import { Component, OnInit } from '@angular/core';
import { UserNoPass } from 'src/app/CustomData.ts/User';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { NavigationService } from 'src/app/Services/navigation.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent  {


  Welcome: string ="Hey There"
  Object:UserNoPass;
  name:string;
  id:string;
  email:string;

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
  

}


