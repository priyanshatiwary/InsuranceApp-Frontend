import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClaimComponent } from './claim/claim.component';
import { DocumentComponent } from './document/document.component';
import { InsurancePlanComponent } from './insurance-plan/insurance-plan.component';
import { InsurancePolicyComponent } from './insurance-policy/insurance-policy.component';
import { InsuranceSchemeComponent } from './insurance-scheme/insurance-scheme.component';
import { PaymentComponent } from './payment/payment.component';
import { SchemeDetailComponent } from './scheme-detail/scheme-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { AgentComponent } from './agent/agent.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoutNavigationComponent } from './logout-navigation/logout-navigation.component';
import { LogoutComponent } from './logout/logout.component';
import { ManageAgentComponent } from './manage-agent/manage-agent.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageInsurancePlanComponent } from './manage-insurance-plan/manage-insurance-plan.component';
import { ManageInsuranceSchemeComponent } from './manage-insurance-scheme/manage-insurance-scheme.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageDocumentComponent } from './manage-document/manage-document.component';

//ADDED NEW
import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AddagentComponent } from './addagent/addagent.component';
import { DeleteAgentComponent } from './delete-agent/delete-agent.component';
import { AddInsuranceSchemeComponent } from './add-insurance-scheme/add-insurance-scheme.component';
import { UpdateInsuranceSchemeComponent } from './update-insurance-scheme/update-insurance-scheme.component';
import { DeleteInsuranceSchemeComponent } from './delete-insurance-scheme/delete-insurance-scheme.component';
import { AddInsurancePlanComponent } from './add-insurance-plan/add-insurance-plan.component';
import { UpdateInsurancePlanComponent } from './update-insurance-plan/update-insurance-plan.component';
import { DeleteInsurancePlanComponent } from './delete-insurance-plan/delete-insurance-plan.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { DeletePolicyComponent } from './delete-policy/delete-policy.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';
import { AddpolicyComponent } from './addpolicy/addpolicy.component';
import { ManageInusrancePolicyComponent } from './manage-inusrance-policy/manage-inusrance-policy.component';

/*
import { AddInsuranceSchemeComponent } from './add-insurance-scheme/add-insurance-scheme.component';
import { UpdateInsuranceSchemeComponent } from './update-insurance-scheme/update-insurance-scheme.component';
import { DeleteInsuranceSchemeComponent } from './delete-insurance-scheme/delete-insurance-scheme.component';
import { AddInsurancePlanComponent } from './add-insurance-plan/add-insurance-plan.component';
import { UpdateInsurancePlanComponent } from './update-insurance-plan/update-insurance-plan.component';
import { DeleteInsurancePlanComponent } from './delete-insurance-plan/delete-insurance-plan.component';
import { AddagentComponent } from './addagent/addagent.component';
import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { DeleteAgentComponent } from './delete-agent/delete-agent.component';
*/
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddSchemeDetailComponent } from './add-scheme-detail/add-scheme-detail.component';
import { UpdateSchemeDetailComponent } from './update-scheme-detail/update-scheme-detail.component';
import { DeleteSchemeDetailComponent } from './delete-scheme-detail/delete-scheme-detail.component';
import { NavbarForEmpComponent } from './navbar-for-emp/navbar-for-emp.component';
import { QueryComponent } from './query/query.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { ViewClaimComponent } from './view-claim/view-claim.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ViewInsurancePlanComponent } from './view-insurance-plan/view-insurance-plan.component';
import { ViewInsuranceSchemeComponent } from './view-insurance-scheme/view-insurance-scheme.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { ViewCommisionComponent } from './view-commision/view-commision.component';
import { ViewCommisionWithdrawalComponent } from './view-commision-withdrawal/view-commision-withdrawal.component';
import { ViewLocationComponent } from './view-location/view-location.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewProfileComponent } from './view-profile/view-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClaimComponent,
    DocumentComponent,
    InsurancePlanComponent,
    InsurancePolicyComponent,
    InsuranceSchemeComponent,
    PaymentComponent,
    SchemeDetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    LoginComponent,
    ContactUsComponent,
    AdminComponent,
    EmployeeComponent,
    CustomerComponent,
    AgentComponent,
    NavigationComponent,
    LogoutNavigationComponent,
    LogoutComponent,
    ManageAgentComponent,
    ManageEmployeeComponent,
    ManageInsurancePlanComponent,
    ManageInsuranceSchemeComponent,
    ManageProfileComponent,
    ManageCustomerComponent,
    ManageDocumentComponent,
    UpdateAgentComponent,
    AddagentComponent,
    DeleteAgentComponent,
    AddInsuranceSchemeComponent,
    UpdateInsuranceSchemeComponent,
    DeleteInsuranceSchemeComponent,
    AddInsurancePlanComponent,
    UpdateInsurancePlanComponent,
    DeleteInsurancePlanComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    DeletePolicyComponent,
    UpdatePolicyComponent,
    AddpolicyComponent,
    ManageInusrancePolicyComponent,
    AddSchemeDetailComponent,
    UpdateSchemeDetailComponent,
    DeleteSchemeDetailComponent,
    NavbarForEmpComponent,
    QueryComponent,
    ViewCustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    ViewClaimComponent,
    ViewPaymentComponent,
    AdminNavbarComponent,
    ViewInsurancePlanComponent,
    ViewInsuranceSchemeComponent,
    ViewAgentComponent,
    ViewCommisionComponent,
    ViewCommisionWithdrawalComponent,
    ViewLocationComponent,
    UpdateLocationComponent,
    AddLocationComponent,
    ViewProfileComponent,
/*
    AddInsuranceSchemeComponent,
    UpdateInsuranceSchemeComponent,
    DeleteInsuranceSchemeComponent,
    AddInsurancePlanComponent,
    UpdateInsurancePlanComponent,
    DeleteInsurancePlanComponent,
    AddagentComponent,
    UpdateAgentComponent,
    DeleteAgentComponent,
*/

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule,
    MatButtonModule,MatDialogModule,MatIconModule,MatToolbarModule,FormsModule,MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,MatSelectModule,MatPaginatorModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
