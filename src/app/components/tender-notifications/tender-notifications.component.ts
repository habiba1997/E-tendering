import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tender-notifications',
  templateUrl: './tender-notifications.component.html',
  styleUrls: ['./tender-notifications.component.css']
})
export class TenderNotificationsComponent implements OnInit {
  array:number[];
  constructor() {
    this.array=[0,1,2,3,4];
   }

  ngOnInit() {
  }

}
