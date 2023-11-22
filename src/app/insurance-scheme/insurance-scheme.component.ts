import { Component } from '@angular/core';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
@Component({
  selector: 'app-insurance-scheme',
  templateUrl: './insurance-scheme.component.html',
  styleUrls: ['./insurance-scheme.component.css']
})
export class InsuranceSchemeComponent {
  title='Welcome to Insurance scheme detail'
  insuranceData:any;
  constructor(){}
}
