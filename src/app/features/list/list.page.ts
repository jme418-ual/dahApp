import { Component } from '@angular/core';
import { FeaturePageComponent } from '../../shared/components/feature-page/feature-page.component';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
  imports: [FeaturePageComponent]
})
export class ListPage {
}
