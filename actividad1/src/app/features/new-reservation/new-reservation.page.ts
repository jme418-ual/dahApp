import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular/standalone';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
  IonNote
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { save, close, calendar, person, document } from 'ionicons/icons';

@Component({
  selector: 'app-new-reservation',
  standalone: true,
  templateUrl: 'new-reservation.page.html',
  styleUrls: ['new-reservation.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonIcon,
    IonNote
  ],
})
export class NewReservationPage {
  private navCtrl = inject(NavController);

  // Form data
  clientName: string = '';
  date: string = new Date().toISOString();
  notes: string = '';

  constructor() {
    addIcons({ save, close, calendar, person, document });
  }

  saveReservation() {
    console.log('Saving reservation:', {
      clientName: this.clientName,
      date: this.date,
      notes: this.notes
    });

    alert(`Reserva guardada exitosamente para ${this.clientName}`);
    
    this.navCtrl.back();
  }

  cancel() {
    console.log('Cancelling new reservation');
    this.navCtrl.back();
  }

  isFormValid(): boolean {
    return this.clientName.trim().length > 0 && this.date.length > 0;
  }
}
