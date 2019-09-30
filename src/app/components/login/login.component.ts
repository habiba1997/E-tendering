/* eslint-disable no-undef */
import { Component, OnInit } from '@angular/core';
import { User, UserNoPass, CompanyTenders, tender } from 'src/app/CustomData.ts/User';
import { HttpService } from 'src/app/Services/http-service.service';
import { NavigationService } from 'src/app/Services/navigation.service';
import { DataCommunicationService } from 'src/app/Services/data-Comunication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allTenders: tender[];
  company: UserNoPass;
  ngOnInit() {


    function Start() {

          (document.querySelector('.word') as HTMLElement).style.marginTop = 40 + 'px';
          (document.querySelector('.blocks')as HTMLElement).style.display = 'block';
          (document.querySelector('.block2') as HTMLElement).style.display = 'block';
          (document.querySelector('.block3') as HTMLElement).style.display = 'block';
    }

    function Flip1() {

      (document.querySelector('.card1') as HTMLElement ).style.transform = 'rotateY(180deg)';
      (document.querySelector('.block1')as HTMLElement).style.height = 400 + 'px';
              }
    function Flip2() {

         (document.querySelector('.card2')as HTMLElement).style.transform = 'rotateY(180deg)';
         (document.querySelector('.block2')as HTMLElement).style.height = 400 + 'px';
     }
    function Flip3() {

         (document.querySelector('.card3') as HTMLElement).style.transform = 'rotateY(180deg)';
         (document.querySelector('.block3') as HTMLElement).style.height = 400 + 'px';
   }





    document.querySelector('.word').addEventListener('click', Start);
    document.querySelector('.block1').addEventListener('click', Flip1);
    document.querySelector('.block2').addEventListener('click', Flip2);
    document.querySelector('.block3').addEventListener('click', Flip3);






  }
user:User= new User();
  Response:string;

  
onEnterEmail(value: string) {
  this.user.email= value;
  console.log(this.user.email);

}
onEnterPass(value:string){
this.user.password= value;
  console.log(this.user.password);

}

Submit(){
console.log("hi submit");
if(this.user.email != null && this.user.password !=null){
 //Make Http Post Request
const parameter = JSON.stringify({email:this.user.email, password:this.user.password});
console.log("parameter",parameter);
this.HttpService.PostLogin(parameter).subscribe(user => {this.Response=user;console.log("token",user.token);});
}
else {
 console.log("error");
}

}

  constructor(
    private HttpService: HttpService,
    private navigate: NavigationService,
    private dataCom : DataCommunicationService

    ){}
  
  
  

dataLogin(Myemail,Mypassword)
{
  JSON.stringify(
    {
      email: Myemail, 
      password: Mypassword
    }
    );
}
dataLoginTrial()
{
  return JSON.stringify(
    {
      email: "GE@gmail.com",
      password: "GECompany"
    }
    );
}

companySubmit(email,password)
{
  var that = this;
  /*if(email != null && password !=null){
  }
  else {
    console.log("error No password or Email");
  } */
  this.HttpService.PostLogin(this.dataLoginTrial())
    .subscribe( (user1) => 
      {
        that.HttpService.getMe(user1.token).subscribe(user2=>
        {
          that.HttpService.getCompanyUserByID(user2.id).subscribe(user3=>
            {
              const obj = new UserNoPass;
              obj.id = user2.id;
              obj.name =user3.name;
              obj.email=user3.email;
              this.dataCom.getObject(obj);
              this.navigate.navigateTo('company/home-page');
            });
        });

        this.HttpService.GetTenders().subscribe(allTenders=>{
          this.allTenders=allTenders;
          console.log("Tenders",this.allTenders);
          const SharedTenders =new CompanyTenders
          SharedTenders.tenders=allTenders;
          this.dataCom.getTenders(SharedTenders);
    
    
    
    
          this.dataCom.dataObject.subscribe(object=>{
            this.company=object;
            console.log("company",this.company);
      
          });
          
        });
      }
    
      );        
  
}



}
