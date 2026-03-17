import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular/standalone';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logIn, person, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon
  ],
})
export class LoginPage {
  private navCtrl = inject(NavController);

  // Form data
  username: string = '';
  password: string = '';

  constructor() {
    addIcons({ logIn, person, lockClosed });
  }

  login() {

    if (this.username.trim() === '' || this.password.trim() === '') {
      alert('Por favor, ingrese usuario y contraseña');
      return;
    }

    localStorage.setItem('auth_token', 'demo_token_123');
    localStorage.setItem('username', this.username);
    this.navCtrl.navigateRoot('/tabs/reservations');
  }

  isFormValid(): boolean {
    return this.username.trim().length > 0 && this.password.trim().length > 0;
  }
}
