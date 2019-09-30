import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { tender, UserNoPass } from 'src/app/CustomData.ts/User';
import { HttpService } from 'src/app/Services/http-service.service';
@Component({
  selector: 'app-direct-requests',
  templateUrl: './direct-requests.component.html',
  styleUrls: ['./direct-requests.component.css']
})
export class DirectRequestsComponent implements OnInit {
  DirectRequestTenders:tender[];
  company:UserNoPass;
  constructor(private DataService :DataCommunicationService,private HttpService: HttpService) { 
    this.DataService.dataObject.subscribe(object=>{
      this.company=object;
      console.log(this.company);
      this.DataService.tenderObject.subscribe(Companytenders=>this.DirectRequestTenders=Companytenders.tenders.filter(t =>(t.Direct_Process==true && t.Companies_Selected.includes(this.company.id))));
      console.log("directRequests",this.DirectRequestTenders);
    });

    

  }

  ngOnInit() {
  }
  delete(noti:tender){
    this.DirectRequestTenders=this.DirectRequestTenders.filter(t => t._id !== noti._id);
    let deletiondata=JSON.stringify(
      {
        CompanyUserId: this.company.id,
        TenderingProcessId: noti._id
      }
  );
  this.HttpService.RejectTender(deletiondata);
    
  
    console.log("direct request tenders ",this.DirectRequestTenders);
    
  }

}
