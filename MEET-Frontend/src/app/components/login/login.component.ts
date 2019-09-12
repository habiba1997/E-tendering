import { Component, OnInit , ElementRef, Renderer2} from '@angular/core';
import { NgStyle } from '@angular/common';
import { User } from 'src/app/CustomData.ts/User';
import { DataServiceService } from 'src/app/Service/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserDataService:DataServiceService) {
    console.log('hi');
  }
  user:User= new User();

  ngOnInit() {
    console.log('hello');


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
onEnterEmail(value: string) {
     this.user.Email= value;
     console.log(this.user.Email);
     
}
onEnterPass(value:string){
  this.user.Password= value;
     console.log(this.user.Password);

}

Submit(){
  console.log("hi submit");
  if(this.user.Email != null && this.user.Password !=null){
    //Make Http Post Request 
  this.UserDataService.Login(this.user).subscribe(user => this.user);
  console.log(this.user.Email);
  console.log(this.user.Password);
  }
  else {
    console.log("error");
  }
  
}










}
