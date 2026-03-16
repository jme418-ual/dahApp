import { Component } from '@angular/core';
import { FeaturePageComponent } from '../../shared/components/feature-page/feature-page.component';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
  imports: [FeaturePageComponent],
})
export class ProductsPage {
}
