import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class ProductDetailPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productsService = inject(ProductsService);

  private productId = this.route.snapshot.paramMap.get('id') ?? '';

  private product$ = this.productsService.getProductById(this.productId);
  public product = toSignal(this.product$, { initialValue: undefined });

  goBack() {
    this.router.navigate(['/products']);
  }
}