import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfollioComponent } from './pages/portfollio/portfollio.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesnpricesComponent } from './pages/servicesnprices/servicesnprices.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfollioComponent,
    HomeComponent,
    ServicesnpricesComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
