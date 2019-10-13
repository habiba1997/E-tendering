export class  companyOpenComp{
companiesId:string[];
direct:boolean;
open:boolean;
  
}


export class  companyNames{
    _id:string;
    name:string;
}

export class  submit{

    companyId:string;
    companyName: string;
    tenderingProcessId: string;
    numberOfFits: 0;
    winner: boolean;
  }

  export class sendToSubscribe{
      submit: submit[];
  }