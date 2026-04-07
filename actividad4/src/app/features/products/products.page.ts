import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ProductsService } from '../../core/services/products.service';
import { add, logOutOutline, eyeOutline, trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class ProductsPage {

  public productsService = inject(ProductsService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private alertController = inject(AlertController);
  private toastController = inject(ToastController);

  constructor() {
    addIcons({ add, logOutOutline, eyeOutline, trashOutline });
  }

  goToAddProduct() {
    this.router.navigate(['/add-product']);
  }

  goToDetail(productId: string) {
    this.router.navigate(['/product-detail', productId]);
  }

  async confirmDelete(productId: string) {
    const alert = await this.alertController.create({
      header: 'Eliminar producto',
      message: '¿Seguro que quieres eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            await this.productsService.deleteProduct(productId);
            const toast = await this.toastController.create({
              message: 'Producto eliminado correctamente.',
              duration: 2000,
              color: 'success',
            });
            await toast.present();
          },
        },
      ],
    });

    await alert.present();
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/home']);
  }
}
