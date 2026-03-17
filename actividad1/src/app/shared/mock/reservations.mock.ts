import { Reservation } from '../models/reservation.model';

export const RESERVATIONS_MOCK: Reservation[] = [
  { id: 1, clientName: 'Juan Pérez', date: '2026-03-17T10:00', status: 'confirmed', notes: 'Cliente frecuente' },
  { id: 2, clientName: 'Ana Gómez', date: '2026-03-18T15:30', status: 'pending', notes: 'Prefiere café descafeinado' },
  { id: 3, clientName: 'Carlos Ruiz', date: '2026-03-19T09:00', status: 'cancelled' },
  { id: 4, clientName: 'María García', date: '2026-03-20T12:00', status: 'confirmed', notes: 'Mesa junto a la ventana' },
  { id: 5, clientName: 'Pedro Fernández', date: '2026-03-21T18:30', status: 'pending', notes: 'Requiere confirmación telefónica' },
  { id: 6, clientName: 'Lucía Martínez', date: '2026-03-22T09:00', status: 'confirmed', notes: 'Reserva para desayuno' },
  { id: 7, clientName: 'Sofía López', date: '2026-03-23T14:00', status: 'cancelled', notes: 'Cancelada por el cliente' },
  { id: 8, clientName: 'Miguel Torres', date: '2026-03-24T16:45', status: 'confirmed', notes: 'Reserva para reunión de trabajo' }
];
