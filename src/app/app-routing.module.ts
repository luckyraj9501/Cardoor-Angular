import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfollioComponent } from './pages/portfollio/portfollio.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesnpricesComponent } from './pages/servicesnprices/servicesnprices.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path: 'portfollio',component:PortfollioComponent},
  {path: 'services-n-prices',component:ServicesnpricesComponent},
  {path: 'resume',component:ResumeComponent},
  {path: 'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
