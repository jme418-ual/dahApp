import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationsPage } from './reservations.page';

describe('ReservationsPage', () => {
  let component: ReservationsPage;
  let fixture: ComponentFixture<ReservationsPage>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsPage]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationsPage);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load reservations from the service', () => {
    expect(component.reservations).toBeTruthy();
    expect(component.reservations.length).toBeGreaterThan(0);
  });

  it('should render one card per reservation', () => {
    const cards = element.querySelectorAll('ion-card.reservation-card');
    expect(cards.length).toBe(component.reservations.length);
  });

  it('should render the first reservation client name', () => {
    const firstReservation = component.reservations[0];
    const text = element.textContent ?? '';

    expect(text).toContain(firstReservation.clientName);
  });

  it('should show the new reservation button', () => {
    const text = element.textContent ?? '';
    expect(text).toContain('Nueva Reserva');
  });
});
