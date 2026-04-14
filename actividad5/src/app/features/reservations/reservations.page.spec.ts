/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationsPage } from './reservations.page';

const jasmineExpect = expect as unknown as <T>(actual: T) => jasmine.Matchers<T>;

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
    jasmineExpect(component).toBeTruthy();
  });

  it('should load reservations from the service', () => {
    jasmineExpect(component.reservations).toBeTruthy();
    jasmineExpect(component.reservations.length).toBeGreaterThan(0);
  });

  it('should render one card per reservation', () => {
    const cards = element.querySelectorAll('ion-card.reservation-card');
    jasmineExpect(cards.length).toBe(component.reservations.length);
  });

  it('should render the first reservation client name', () => {
    const firstReservation = component.reservations[0];
    const text = element.textContent ?? '';

    jasmineExpect(text).toContain(firstReservation.clientName);
  });

  it('should show the new reservation button', () => {
    const text = element.textContent ?? '';
    jasmineExpect(text).toContain('Nueva Reserva');
  });
});