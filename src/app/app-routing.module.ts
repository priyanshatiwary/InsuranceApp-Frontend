import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { EmployeeComponent } from './employee/employee.component';
import { AgentComponent } from './agent/agent.component';
import { CustomerComponent } from './customer/customer.component';
import { LogoutNavigationComponent } from './logout-navigation/logout-navigation.component';  
import { LogoutComponent } from './logout/logout.component';
//Admin modules
import { ManageAgentComponent } from './manage-agent/manage-agent.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageInsurancePlanComponent } from './manage-insurance-plan/manage-insurance-plan.component';
import { ManageInsuranceSchemeComponent } from './manage-insurance-scheme/manage-insurance-scheme.component';
import { ManageInusrancePolicyComponent } from './manage-inusrance-policy/manage-inusrance-policy.component';
import { QueryComponent } from './query/query.component';
//Employee Modules
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
/*import { ManageAgentComponent } from './manage-agent/manage-agent.component'; */ //alreday there in admin
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageDocumentComponent } from './manage-document/manage-document.component';

import { UpdateAgentComponent } from './update-agent/update-agent.component';


import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { ViewClaimComponent } from './view-claim/view-claim.component';
import { ViewInsurancePlanComponent } from './view-insurance-plan/view-insurance-plan.component';
import { UpdateInsurancePlanComponent } from './update-insurance-plan/update-insurance-plan.component';
import { UpdateInsuranceSchemeComponent } from './update-insurance-scheme/update-insurance-scheme.component';
import { ViewInsuranceSchemeComponent } from './view-insurance-scheme/view-insurance-scheme.component';
import { ViewCommisionComponent } from './view-commision/view-commision.component';
import { ViewCommisionWithdrawalComponent } from './view-commision-withdrawal/view-commision-withdrawal.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { ViewLocationComponent } from './view-location/view-location.component';
import { AddLocationComponent } from './add-location/add-location.component';
 


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'insurance-plan', component: InsurancePlanComponent },
  { path: 'insurance-policy', component: InsurancePolicyComponent },
  { path: 'insurance-scheme', component: InsuranceSchemeComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'scheme-detail', component: SchemeDetailComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'admin' , component: AdminComponent},
  { path: 'employee', component:EmployeeComponent},
  { path: 'agent', component:AgentComponent},
  { path: 'customer', component:CustomerComponent},
  { path: 'logoutnavigation', component:LogoutNavigationComponent},
  { path: 'logout', component:LogoutComponent},
  { path: 'manage-agent', component: ManageAgentComponent },
  

/*
    { path: 'manage-employee', component: ManageEmployeeComponent },
    { path: 'manage-insurance-plan', component: ManageInsurancePlanComponent },
    { path: 'manage-insurance-scheme', component: ManageInsuranceSchemeComponent },
  */
  //Admin Modules
  { path: 'admin/manage-agent', component: ManageAgentComponent },
  { path: 'admin/manage-employee', component: ManageEmployeeComponent },
  { path: 'admin/manage-insurance-plan', component: ManageInsurancePlanComponent },
  { path: 'admin/manage-insurance-scheme', component: ManageInsuranceSchemeComponent },
  { path: 'admin/manage-insurance-policy',component:InsurancePolicyComponent},
  { path: 'query',component:QueryComponent},
  { path: 'view-customer',component:ViewCustomerComponent},
  { path: 'view-payments',component:ViewPaymentComponent},
  { path: 'view-claim',component:ViewClaimComponent},
  { path: 'view-insurance-plan',component:ViewInsurancePlanComponent},
  { path: 'update-insurance-plan',component:UpdateInsurancePlanComponent},
  { path: 'update-insurance-scheme',component:UpdateInsuranceSchemeComponent},
  { path: 'view-insurance-scheme',component:ViewInsuranceSchemeComponent},
  { path: 'view-commision',component:ViewCommisionComponent},
  { path: 'view-commisionWithdrawal',component:ViewCommisionWithdrawalComponent},
  { path: 'view-agent',component:ViewAgentComponent},
  { path: 'view-location',component:ViewLocationComponent},
  { path: 'add-location',component:AddLocationComponent},
  
  //Employee Modules

  { path: 'manage-profile', component: ManageProfileComponent },
  { path: 'employee/manage-agent', component: ManageAgentComponent },
  { path: 'employee/manage-customer', component: ManageCustomerComponent },
  { path: 'employee/manage-document', component: ManageDocumentComponent },
  

  //Agent 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
