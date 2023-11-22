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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
