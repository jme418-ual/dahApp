import { Component } from '@angular/core';
import { FeaturePageComponent } from '../../shared/components/feature-page/feature-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [FeaturePageComponent],
})
export class HomePage {
}
