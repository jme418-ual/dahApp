import { Component } from '@angular/core';
import { FeaturePageComponent } from '../../shared/components/feature-page/feature-page.component';

@Component({
  selector: 'app-action',
  standalone: true,
  templateUrl: 'action.page.html',
  styleUrls: ['action.page.scss'],
  imports: [FeaturePageComponent],
})
export class ActionPage {
}
