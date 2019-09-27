import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './Services/http-service.service';
import { DataCommunicationService } from './Services/data-Comunication.service';
import { NavigationService } from './Services/navigation.service';
<<<<<<< HEAD
import { DataService } from './Services/data.service'
import { FormsModule } from '@angular/forms';
=======
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TenderNotificationsComponent } from './components/tender-notifications/tender-notifications.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DirectRequestsComponent } from './components/direct-requests/direct-requests.component';




>>>>>>> 76b1e16da08222dc74a9eae1de7012e113d14a78

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
<<<<<<< HEAD
=======
    PageNotFoundComponent,
    TenderNotificationsComponent,
    NavBarComponent,
    DirectRequestsComponent
  
>>>>>>> 76b1e16da08222dc74a9eae1de7012e113d14a78
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [HttpService,DataService,DataCommunicationService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
