import { Component, OnInit } from '@angular/core';
import { Tender, tender, User, UserNoPass, CompanyTenders } from 'src/app/CustomData.ts/User';
import { HttpService } from 'src/app/Services/http-service.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { filter } from 'minimatch';

@Component({
  selector: 'app-tender-notifications',
  templateUrl: './tender-notifications.component.html',
  styleUrls: ['./tender-notifications.component.css']
})
export class TenderNotificationsComponent implements OnInit {
  allTenders:tender[];
  company:UserNoPass;
 
  
  constructor(private TenderHttpService: HttpService, private DataService: DataCommunicationService) {
    
  this.DataService.dataObject.subscribe(obj=>{
    this.company=obj;
    console.log("company",this.company);
    this.DataService.tenderObject.subscribe(SharedTenders=>{
      this.allTenders=SharedTenders.tenders;
      console.log("notification tenders",this.allTenders)
      this.Filter();
      console.log("after filter",this.allTenders);
    });

  });

    

    
   }

  ngOnInit() {
  }
  delete(noti:tender){
    this.allTenders=this.allTenders.filter(t => t._id !== noti._id);
    
    console.log(this.allTenders);
    
  }
  Filter(){
    this.allTenders=this.allTenders.filter(t =>t.Companies_Selected.includes(this.company.id));

  }
  // GetDirectRequest(){
  //   this.SharedTenders=this.allTenders.filter(t =>(t.Direct_Process==true && t.Companies_Selected.includes(this.company.id)));
  //   console.log(this.SharedTenders);

  // }

}
