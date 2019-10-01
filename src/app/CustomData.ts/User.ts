export class UserLogin{
    Email:string;
    Password:string;
}  
export class User{

    id: string;
    name: string;
    email: string;
    password: string;
    
}  
export class UserNoPass{

    id: string;
    name: string;
    email: string;
    
}  

export class Tender{
    HospitalName:string;
    DeviceName:string;
    Date:string;
    id:number;
   
}
export class tender {
  _id: string;
  Issued_Hospital_ID: string;
  Hospital_Name:string;
  Device_Name :string;
  CountryOfOrigin: string;
  startDate: string;
  deadlineDate: string;
  Direct_Process: boolean;
  Open_Process: boolean;
  Companies_Selected: string[];

}
export class CompanyTenders{
    tenders:tender[]
}
export class TenderFile_Id{
    tenderid:string;
}
export class SubscriptionsIds{
    _id:string;
}

