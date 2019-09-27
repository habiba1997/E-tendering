import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
//import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpService } from './Services/http-service.service';
import { DataCommunicationService } from './Services/data-Comunication.service';
import { NavigationService } from './Services/navigation.service';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TenderNotificationsComponent } from './components/tender-notifications/tender-notifications.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DirectRequestsComponent } from './components/direct-requests/direct-requests.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyProfileComponent,
    RoutingComponents,
    PageNotFoundComponent,
    TenderNotificationsComponent,
    NavBarComponent,
    DirectRequestsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [HttpService,DataCommunicationService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
