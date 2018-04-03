import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegistrationComponent } from './registration/registration.component';
//import { DatePickerModule } from 'angular-io-datepicker';
//import { OverlayModule } from 'angular-io-overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RegistrationService } from './registration/registration.service';
import { AdminsComponent } from './admins/admins.component';
import { AutomobilesComponent } from './automobiles/automobiles.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AdminsService } from './admins/admins.service';
import { AutomobilesListComponent } from './automobiles-list/automobiles-list.component';
import { ElectronicsListComponent } from './electronics-list/electronics-list.component';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { ElectronicsListService } from './electronics-list/electronics-list.service';
import { LoginComponent } from './login/login.component';
import { ContactUsService } from './contactus/contact-us.service';


//import {DatepickerModule} from 'ngx-date-picker';
//import { MyDatePickerModule } from 'mydatepicker';
//import { NgDatepickerModule } from 'ng2-datepicker';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    CategoriesComponent,
    RegistrationComponent,
    AdminsComponent,
    AutomobilesComponent,
    ElectronicsComponent,
    AutomobilesListComponent,
    ElectronicsListComponent,
    CompareProductsComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    //OverlayModule,
    //DatepickerModule,
    ReactiveFormsModule,
    //MyDatePickerModule,
    //NgDatepickerModule,
    RouterModule.forRoot([
      {path:'contact',component:ContactusComponent},
      {path:'home',component:HomeComponent},
      {path:'about', component:AboutusComponent},
      {path:'categories', component:CategoriesComponent},
      {path:'register',component:RegistrationComponent},
      {path:'automobiles',component:AutomobilesComponent},
      {path:'electronics',component:ElectronicsComponent},
      {path:'admins',component:AdminsComponent},
      {path:'categories',component:CategoriesComponent},
      {path:'login',component:LoginComponent},
      {path:'categories/:categoryName',component:CompareProductsComponent}
    ])
  ],
  providers: [RegistrationService,AdminsService,ElectronicsListService,ContactUsService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
