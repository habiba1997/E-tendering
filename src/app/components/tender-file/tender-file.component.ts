import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';
import { TenderFile_Id } from 'src/app/CustomData.ts/User';

@Component({
  selector: 'app-tender-file',
  templateUrl: './tender-file.component.html',
  styleUrls: ['./tender-file.component.css']
})
export class TenderFileComponent implements OnInit {
 tenderfile_id:TenderFile_Id;
  constructor( private tenderService: DataCommunicationService) { 
    this.tenderService.transferObject.subscribe(tenderid=>{this.tenderfile_id=tenderid
    ;console.log("TenderFileID",this.tenderfile_id);});
    
  }

  ngOnInit() {
  }

}
