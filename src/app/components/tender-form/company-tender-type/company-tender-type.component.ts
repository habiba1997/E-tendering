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
  open: boolean;
  direct:boolean;
  
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
      this.open = false; this.direct = true;   
    }
    else
    {
      this.DirectType = "Undirect";
      this.direct = false;
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
      this.open = true; this.direct = false;
    }
    else {
      this.Tendertype="Closed";
      this.companiesId=[];
      this.open = false; this.direct = false;
    }
    
  }
  submit()
  {

    console.log("direct: "+ this.direct);
    console.log("open: "+ this.open);


    if(this.direct == true && this.open == true)
    {
      alert('please choose carefully');
      throw new Error('Something went wrong'); 
      return 0;
    }

    try{
      
         this.dataCom.getCompanies(this.companiesId, this.direct, this.open);
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
      console.log("checked: "+ checked+" obj: "+ obj);
      this.remove(this.companiesId,obj);
    }
    console.log(this.companiesId);
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
    this.companiesId =[];
    this.companiesId.push(value);
    console.log(this.companiesId);
  }


}
