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



const appRoutes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "tender-form", component: TenderFormComponent },

    //{ path: 'company/tender-notifications' , component: TenderNotificationsComponent },
    //{ path: 'company' , component: CompanyHomeComponent },
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
        
      }
    ]
  
  
  },
    { path: '' , component: NavBarComponent ,outlet: "NavBar"},
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
    NavBarComponent,TenderFormComponent,
    CompanyProfileComponent,
    TenderFormComponent,
    DiathermyFormComponent,
    UltrasoundFormComponent
   
  ];
