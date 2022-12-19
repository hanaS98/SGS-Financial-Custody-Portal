import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS }from '@angular/common/http';

import { WinAuthInterceptor } from './Service/WinAuthInterceptor.interceptor.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { LeaderComponent } from './leader/leader.component';
import { RequestComponent } from './request/request.component';
//import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { EmployeeRequestsComponent } from './employee-requests/employee-requests.component';
import { EmployeeRequestsFilterComponent } from './employee-requests/employee-requests-filter/employee-requests-filter.component';
import { EmployeeRequestsListComponent } from './employee-requests/employee-requests-list/employee-requests-list.component';
import { EmployeeRequestBtnComponent } from './employee-requests/employee-request-btn/employee-request-btn.component';
import { EmployeeRequestStatusComponent } from './employee-requests/employee-request-status/employee-request-status.component';
import { EmployeeRequestUpdateComponent } from './employee-requests/employee-request-update/employee-request-update.component';
import { RequestTrackingComponent } from './employee-requests/employee-requests-list/request-tracking/request-tracking.component';
import { LeaderRequestFilterComponent } from './leader/leader-request-filter/leader-request-filter.component';
import { LeaderRequestStatusComponent } from './leader/leader-request-status/leader-request-status.component';
import { RequestsListComponent } from './leader/requests-list/requests-list.component';
import { TrackingComponent } from './request/tracking/tracking.component';
import { InvoiceComponent } from './request/invoice/invoice.component';





const appRoute:Routes =[
  //{path:'',redirectTo:'employee', pathMatch:'full'},
  {path:'',component:EmployeeComponent},
  {path:'employee',component:EmployeeComponent},
  //{path:'employee/request',canDeactivate:[CanDeactivateGuardService], component:RequestComponent},
  //{path:'employee/employee-status',canDeactivate:[CanDeactivateGuardService],component:EmployeeStatusComponent},
  {path:'employee/request', component:RequestComponent},
  {path:'employee/employee-status',component:EmployeeStatusComponent},
  {path:'leaders',component:LeaderComponent},
  {path:'leaders/view-request',component:ViewRequestComponent}
  //{path:'./request',component:RequestComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    EmployeeComponent,
    LeaderComponent,
    RequestComponent,
    EmployeeStatusComponent,
    ViewRequestComponent,
    EmployeeRequestsComponent,
    EmployeeRequestsFilterComponent,
    EmployeeRequestsListComponent,
    EmployeeRequestBtnComponent,
    EmployeeRequestStatusComponent,
    EmployeeRequestUpdateComponent,
    RequestTrackingComponent,
    LeaderRequestFilterComponent,
    LeaderRequestStatusComponent,
    RequestsListComponent,
    TrackingComponent,
    InvoiceComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
