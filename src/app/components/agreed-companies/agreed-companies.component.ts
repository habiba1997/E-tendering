import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http-service.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';

@Component({
  selector: 'app-agreed-companies',
  templateUrl: './agreed-companies.component.html',
  styleUrls: ['../../app.component.css']
})
export class AgreedCompaniesComponent{
Agreed =[];

  constructor(
    private http:HttpService,private dateservice:DataCommunicationService

  ) {
     this.Agreed= [];

     this.dateservice.dataSourceObject.subscribe(
      data=>
      {
        data.forEach(element => {
          this.Agreed.push({
            "companyId": element.companyId,
            "companyName": element.companyName,
            "tenderingProcessId": element.tenderingProcessId,
            "numberOfFits": element.numberOfFits,
            "winner": false
            
          })

}); });

   }



  maxThree(array){

    let max =[0,0,0];
    let maxIndex=[-1,-1,-1];

    for(var i =0 ; i < array.length; ++i)
      {
        if(max[0]<array[i].numberOfFits)
        {
          max[0]= array[i].numberOfFits;
          maxIndex[0] = i;

        }
        else if(max[1]<array[i].numberOfFits)
        {
          max[1]= array[i].numberOfFits;
          maxIndex[1] = i;

        }
        else if(max[2]<array[i].numberOfFits)
        {
          max[2]= array[i].numberOfFits;
          maxIndex[2] = i;

        }
      }
  return maxIndex;      
  }
  async MostFit()
  {
    let max = 0;
    let maxIndex=-1;
    for(var i =0 ; i < this.Agreed.length; ++i)
      {
        if(max<this.Agreed[i].numberOfFits)
        {
          max = this.Agreed[i].numberOfFits;
          maxIndex = i;

        }
      }

    this.Agreed[maxIndex].winner = true;
  }
  ThreeMostFit()
  {
    let max = this.maxThree(this.Agreed)
    this.Agreed[max[0]].winner = true;
    this.Agreed[max[1]].winner = true;
    this.Agreed[max[2]].winner = true;

  
  }
}
