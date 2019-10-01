import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http-service.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { UserNoPass } from 'src/app/CustomData.ts/User';

@Component({
  selector: 'app-hospital-tenders',
  templateUrl: './hospital-tenders.component.html',
  styleUrls: ['./hospital-tenders.component.css']
})
export class HospitalTendersComponent implements OnInit {
 hospital:UserNoPass;
 hospitaData:any;
  constructor(private httpservice :HttpService , private dateservice:DataCommunicationService) { }

  ngOnInit() {
    this.dateservice.dataObject.subscribe(user=>{
      this.hospital=user;
      console.log("hospital-user",this.hospital);
      this.httpservice.getHospitalUserByID(this.hospital.id).subscribe(data=>{
        this.hospitaData=data;
        console.log("hospital-data",this.hospitaData);
      });

      
    });
  }

}
