import { Component } from '@angular/core';
import { FeaturePageComponent } from '../../shared/components/feature-page/feature-page.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  templateUrl: 'reservations.page.html',
  styleUrls: ['reservations.page.scss'],
  imports: [FeaturePageComponent]
})
export class ReservationsPage {
}
