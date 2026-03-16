import { Component } from '@angular/core';
import { FeaturePageComponent } from '../../shared/components/feature-page/feature-page.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss'],
  imports: [FeaturePageComponent],
})
export class ClientsPage {
}
