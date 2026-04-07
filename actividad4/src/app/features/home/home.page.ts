import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  private router = inject(Router);

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToPublicProducts() {
    this.router.navigate(['/public-products', 'RUjQQ3VGe8bNJOpRlV8Jo6Fp3KF2']);
  }
}
