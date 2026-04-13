import { Component, input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  standalone: true,
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  name = input.required<string>();
  description = input.required<string>();
}
