import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/Services/navigation.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  {

  constructor(
    private navigate: NavigationService
  ) { }
  logout()
  {
    this.navigate.navigateTo('./login');
  }

}
