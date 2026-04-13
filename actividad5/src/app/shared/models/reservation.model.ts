export type Reservation = {
  id: number;
  clientName: string;
  date: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  notes?: string;
};
