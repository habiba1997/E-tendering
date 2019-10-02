import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http-service.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';

@Component({
  selector: 'app-agreed-companies',
  templateUrl: './agreed-companies.component.html',
  styleUrls: ['../../app.component.css']
})
export class AgreedCompaniesComponent{
  
  Agreed= [
    {
      "companyId": "5d81e9dbb635331fb81d1dec",
      "companyName": "siemins",
      "tenderingProcessId": "5d936dfee9c1e04deb3d7ea8",
      "numberOfFits": 0,
      "winner": false,   
     },
    {
      "companyId": "5d81e9dbb635331fb81d1dec",
      "companyName": "siemins",
      "tenderingProcessId": "5d936dfee9c1e04deb3d7ea8",
      "numberOfFits": 4,
      "winner": false,
    },
    {
      "companyId": "5d81e9dbb635331fb81d1dec",
      "tenderingProcessId": "5d936dfee9c1e04deb3d7ea8",
      "numberOfFits": 14,
      "companyName": "siemins",
      "winner": false,
    },
    {
      "companyId": "5d81e9dbb635331fb81d1dec",
      "tenderingProcessId": "5d936dfee9c1e04deb3d7ea8",
      "numberOfFits": 17,
      "companyName": "siemins",
      "winner": false,
    },
    {
      "companyId": "5d81e9dbb635331fb81d1dec",
      "tenderingProcessId": "5d936dfee9c1e04deb3d7ea8",
      "numberOfFits": 70,
      "companyName": "siemins",
      "winner": false,
    },
    {
      "companyId": "5d81e9dbb635331fb81d1dec",
      "tenderingProcessId": "5d936dfee9c1e04deb3d7ea8",
      "numberOfFits": 7,
      "companyName": "siemins",
      "winner": false,
    }, {
      "companyId": "5d81e9dbb635331fb81d1dec",
      "tenderingProcessId": "5d9327e0a25dd9158e325e5f",
      "numberOfFits": 6,
      "winner": false,
      "companyName": "siemins"
    },
    {
      "companyId": "5d81e9dbb635331fb81d1dec",
      "tenderingProcessId": "5d9327e0a25dd9158e325e5f",
      "numberOfFits": 27,
      "winner": false,
      "companyName": "Adam2"
    },
    {
      "companyId": "5d81e9dbb635331fb81d1dec",
      "tenderingProcessId": "5d9327e0a25dd9158e325e5f",
      "numberOfFits": 5,
      "winner": false,
      "companyName": "WHatever"
    },
    {
      "companyId": "5d81e9dbb635331fb81d1dec",
      "tenderingProcessId": "5d943ce35c9ca815cdcb02db",
      "numberOfFits": 3,
      "winner": false,
      "companyName": "siemins"
    }
    
  ]

  constructor(
    private http:HttpService,private dateservice:DataCommunicationService

  ) {

// this.dateservice.dataSourceObject.subscribe(
//   data=>
//   {
//      //this.Agreed = data;
//      console.log(""dara7data);
//   }
// )

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
