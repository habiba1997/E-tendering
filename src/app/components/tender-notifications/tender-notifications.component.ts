import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/CustomData.ts/User';
import { HttpService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-tender-notifications',
  templateUrl: './tender-notifications.component.html',
  styleUrls: ['./tender-notifications.component.css']
})
export class TenderNotificationsComponent implements OnInit {
  tenders:Tender[];
  constructor(private TenderHttpService: HttpService) {
    this.tenders=this.TenderHttpService.getTenders();

    
   }

  ngOnInit() {
  }
  delete(noti:Tender){
    this.tenders=this.tenders.filter(t => t.id !== noti.id)
  }

}
