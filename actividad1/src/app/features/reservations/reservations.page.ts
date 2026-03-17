import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular/standalone';
import {
  IonContent,
  IonList,
  IonCard,
  IonCardContent,
  IonBadge,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, calendar, person, documentText } from 'ionicons/icons';
import { Reservation } from '../../shared/models/reservation.model';
import { ReservationsService } from '../../shared/services/reservations.service';
import { ReservationIconSet } from '../../shared/models/reservation-icon-set.model';

@Component({
  selector: 'app-reservations',
  standalone: true,
  templateUrl: 'reservations.page.html',
  styleUrls: ['reservations.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonList,
    IonCard,
    IonCardContent,
    IonBadge,
    IonButton,
    IonIcon
  ]
})
export class ReservationsPage {
  private navCtrl = inject(NavController);
  private reservationsService = inject(ReservationsService);
  reservations: Reservation[] = [];
  private readonly icons: ReservationIconSet = {
    add,
    calendar,
    person,
    documentText
  };

  constructor() {
    addIcons(this.icons);
    this.reservations = this.reservationsService.getReservations();
  }

  goToNewReservation() {
    this.navCtrl.navigateForward('/new-reservation');
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'confirmed':
        return 'green';
      case 'pending':
        return 'orange';
      case 'cancelled':
        return 'red';
      default:
        return 'medium';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'confirmed':
        return '✔ Confirmada';
      case 'pending':
        return '⏳ Pendiente';
      case 'cancelled':
        return '✖ Cancelada';
      default:
        return status;
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
