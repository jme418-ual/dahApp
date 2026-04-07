import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-public-products',
  standalone: true,
  templateUrl: './public-products.page.html',
  styleUrls: ['./public-products.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class PublicProductsPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productsService = inject(ProductsService);

  private userId = this.route.snapshot.paramMap.get('userId') ?? '';

  private products$ = this.productsService.getProductsByUserId(this.userId);
  public products = toSignal(this.products$, { initialValue: [] });

  goBack() {
    this.router.navigate(['/home']);
  }
}
