import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './Services/http-service.service';
import { DataCommunicationService } from './Services/data-Comunication.service';
import { NavigationService } from './Services/navigation.service';
import { DataService } from './Services/data.service'
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { TenderNotificationsComponent } from './components/tender-notifications/tender-notifications.component';
import { DirectRequestsComponent } from './components/direct-requests/direct-requests.component';
import { TenderFileComponent } from './components/tender-file/tender-file.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompanySubscriptionsComponent } from './components/company-subscriptions/company-subscriptions.component';
import { HospitalHomePageComponent } from './components/hospital-home-page/hospital-home-page.component';
import { HospitalProfileComponent } from './components/hospital-profile/hospital-profile.component';
import { HospitalTendersComponent } from './components/hospital-tenders/hospital-tenders.component';
import { DiathermyFileComponent } from './components/tender-file/diathermy-file/diathermy-file.component';
import { AgreedCompaniesComponent } from './components/agreed-companies/agreed-companies.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    NavBarComponent,
    CompanyProfileComponent,
    TenderNotificationsComponent,
    DirectRequestsComponent,
    TenderFileComponent,
    PageNotFoundComponent,
    CompanySubscriptionsComponent,
    HospitalHomePageComponent,
    HospitalProfileComponent,
    HospitalTendersComponent,
    DiathermyFileComponent,
  
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
