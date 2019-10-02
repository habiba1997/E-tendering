import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http-service.service';
import { NavigationService } from 'src/app/Services/navigation.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';

@Component({
  selector: 'app-company-tender-type',
  templateUrl: './company-tender-type.component.html',
  styleUrls: ['../../../app.component.css']
})
export class CompanyTenderTypeComponent  implements OnInit{
  TenderFormTitle:string="New Tender Request"
  UndirectTenderProcessType=["Open","Closed"]
  TenderProcessType=["Direct","Undirect"]
  Tendertype:string;
  DirectType:string;
  companySelected:string;

  
  companies=[];

  companiesId;

  constructor(
    private http:HttpService,
    private navigate:NavigationService,
    private dataCom : DataCommunicationService
  ) {
  } 
  
   
  async ngOnInit() {
    var i =0;  
    var comp=[];

    let that = this;
    this.http.getCompanyNames().subscribe(user3=>
      {
        user3.forEach(element => {
          comp[i]=element;
         i=i+1;
        });
      });

    this.companies=comp;

    console.log(this.companies)


}


           

  onTenderTypeSelection(value)
  {
    if(value=="Direct")
    {
      this.DirectType = "Direct";
      this.companiesId=[];

    }else
    {
      this.DirectType = "Undirect";
    }
  }
  onTenderOpenSelection(value)
  {
    if(value=="Open") 
    {
      this.companiesId=[];
      this.Tendertype="Open";
      let arr = this.companies;
      arr.forEach(element => {
        this.companiesId.push(element._id)
      });
    }
    else {
      this.Tendertype="Closed";
      this.companiesId=[];
    }
  }
  submit()
  {
    var open:boolean;
    var direct : boolean;
    if( this.Tendertype=="Open") open=true;
    else open = false;

    if( this.DirectType = "Direct") direct=true;
    else direct = false;


    try{
      
         this.dataCom.getCompanies(this.companiesId, direct, open);
         this.navigate.navigateTo("./tender-form")

    }
    catch(Exception)
    {
      alert(Exception);
    }
  }

  checkBox(checked,obj)
  {
    if(checked)
    {
      this.companiesId.push(obj);
    }
    else{
      this.remove(this.companiesId,obj);
    }
  }


  remove(array:string[],removedObject:string):string[]
  {
    var pos = array.indexOf(removedObject);
    // Remove an item by index position
    var removedItem = array.splice(pos, 1);
    return array;
  }

  onCompanySelection(value)
  {
    this.companiesId.push(value);
  }

  // findByName(value): any
  // {
  //   let array = this.companies;
  //   array.forEach(element => {
      
  //     if((element.name).valueOf()===value.valueOf()) 
  //     {        
  //       let str = element._id;
  //               console.log(str)

  //       return str;
  //     }
      
  //   });
  //   return "null"
  
  // }

}
