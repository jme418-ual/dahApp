import { Component, input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-feature-page',
  standalone: true,
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class FeaturePageComponent {
  title = input.required<string>();
  name = input.required<string>();
  description = input('');
}
