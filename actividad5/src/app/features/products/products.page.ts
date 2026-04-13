import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular/standalone';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonBadge,
  IonButton,
  IonIcon,
  IonChip,
  IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOut as logOutIcon, pricetag, cube, basket } from 'ionicons/icons';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';
import { ProductIconSet } from '../../shared/models/product-icon-set.model';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardContent,
    IonBadge,
    IonButton,
    IonIcon,
    IonChip,
    IonLabel
  ],
})
export class ProductsPage {
  private navCtrl = inject(NavController);
  private productsService = inject(ProductsService);
  products: Product[] = [];
  private readonly icons: ProductIconSet = {
    logOut: logOutIcon,
    pricetag,
    cube,
    basket
  };

  constructor() {
    addIcons(this.icons);
    this.products = this.productsService.getProducts();
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.navCtrl.navigateRoot('/login');
  }

  getStockColor(stock: number): string {
    if (stock > 20) return 'success';
    if (stock > 10) return 'warning';
    return 'danger';
  }

  formatPrice(price: number): string {
    return price.toFixed(2) + ' €';
  }
}
