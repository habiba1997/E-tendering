import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
//import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { TenderNotificationsComponent } from './components/tender-notifications/tender-notifications.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TenderFormComponent } from './components/tender-form/tender-form.component';
import { DiathermyFormComponent } from './components/tender-form/diathermy-form/diathermy-form.component';
import { UltrasoundFormComponent } from './components/tender-form/ultrasound-form/ultrasound-form.component';
import { DirectRequestsComponent } from './components/direct-requests/direct-requests.component';
import { CompanyTenderTypeComponent } from './components/tender-form/company-tender-type/company-tender-type.component';
import { TenderFileComponent } from './components/tender-file/tender-file.component';
import { CompanySubscriptionsComponent } from './components/company-subscriptions/company-subscriptions.component';
import { HospitalHomePageComponent } from './components/hospital-home-page/hospital-home-page.component';
import { HospitalProfileComponent } from './components/hospital-profile/hospital-profile.component';
<<<<<<< HEAD
import { HospitalTendersComponent } from './components/hospital-tenders/hospital-tenders.component';
import { DiathermyFileComponent } from './components/tender-file/diathermy-file/diathermy-file.component';
=======
import { AgreedCompaniesComponent } from './components/agreed-companies/agreed-companies.component';
>>>>>>> a3d1e1827ca0923a91a502e04fd25cfc5754ce84



const appRoutes: Routes = [
<<<<<<< HEAD
    { path: "tender-form", component: TenderFormComponent },
    //to be removed 
    { path: "tender-Diathermy", component: DiathermyFileComponent},
    { path: "tender", component: CompanyTenderTypeComponent },
    { path: "ultrasound", component: UltrasoundFormComponent },
=======
    //{ path: "tender-form", component: TenderFormComponent },
    //{ path: "tender", component: CompanyTenderTypeComponent },
    //{ path: "ultrasound", component: UltrasoundFormComponent },
>>>>>>> a3d1e1827ca0923a91a502e04fd25cfc5754ce84
    //{ path: 'company/tender-notifications' , component: TenderNotificationsComponent },
    //{ path: 'company' , component: CompanyHomeComponent },
    

    { path: 'agreed' , component: AgreedCompaniesComponent },


    { path: 'company/home-page' , component: NavBarComponent ,children:[
      {
        path:'',
        component:CompanyProfileComponent
      },
      {
        path:'company/profile',
        component:CompanyProfileComponent
      },
      {
        path: 'company/tender-notifications',
        component: TenderNotificationsComponent,
        
      },
      {
        path: 'company/tender-directRequest',
        component: DirectRequestsComponent,
        
      },
      {
        path: 'company/company-subscribtions',
        component: CompanySubscriptionsComponent,
        
      }
      
      
    ]
  
  
  },
  
  
   
    { path: 'company/tender-file',component: TenderFileComponent},
    { path: "hospital/home-page", component: HospitalHomePageComponent ,
    children:[
      {
        path:'',
        component:HospitalProfileComponent
      },
      {
        path:'hospital/profile',
        component:HospitalProfileComponent
      },
      {
<<<<<<< HEAD
        path:'hospital/tenders',
        component:HospitalTendersComponent
      },
=======
        path:'hospital/new-tender',
        component: CompanyTenderTypeComponent
      },
     
>>>>>>> a3d1e1827ca0923a91a502e04fd25cfc5754ce84

    ]}, 
  
    { path: "login", component: LoginComponent },
    { path: "", redirectTo: "/login", pathMatch: "full" }, 
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [ 
    LoginComponent,
    PageNotFoundComponent,
    TenderNotificationsComponent,
    NavBarComponent,
    CompanyProfileComponent,
    TenderFormComponent,
    DiathermyFormComponent,
    UltrasoundFormComponent,
    DirectRequestsComponent,
    CompanyTenderTypeComponent,
    TenderFileComponent,
    CompanySubscriptionsComponent,
    HospitalHomePageComponent,
    HospitalProfileComponent,
    AgreedCompaniesComponent,
  
   
  ];
