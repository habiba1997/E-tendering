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

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
   
  
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
