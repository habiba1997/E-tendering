import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { tender, UserNoPass } from 'src/app/CustomData.ts/User';

@Component({
  selector: 'app-direct-requests',
  templateUrl: './direct-requests.component.html',
  styleUrls: ['./direct-requests.component.css']
})
export class DirectRequestsComponent implements OnInit {
  DirectRequestTenders:tender[];
  company:UserNoPass;
  constructor(private DataService :DataCommunicationService) { 
    this.DataService.dataObject.subscribe(object=>{
      this.company=object;
      console.log(this.company);
      this.DataService.tenderObject.subscribe(Companytenders=>this.DirectRequestTenders=Companytenders.tenders.filter(t =>(t.Direct_Process==true && t.Companies_Selected.includes(this.company.id))));
      console.log("directRequests",this.DirectRequestTenders);
    });

    

  }

  ngOnInit() {
  }

}
