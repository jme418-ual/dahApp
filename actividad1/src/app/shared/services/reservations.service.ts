import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { RESERVATIONS_MOCK } from '../mock/reservations.mock';

@Injectable({ providedIn: 'root' })
export class ReservationsService {
  getReservations(): Reservation[] {
    return RESERVATIONS_MOCK;
  }
}
