import { ReservationsPage } from './reservations.page';

describe('ReservationsPage Component', () => {
  it('should create the component', () => {
    cy.mount(ReservationsPage).then((wrapper) => {
      expect(wrapper.component).to.not.be.undefined;
    });
  });

  it('should load reservations from the service', () => {
    cy.mount(ReservationsPage).then((wrapper) => {
      expect(wrapper.component.reservations).to.be.an('array').and.not.be.empty;
    });
  });

  it('should render one card per reservation', () => {
    cy.mount(ReservationsPage).then((wrapper) => {
      cy.get('ion-card.reservation-card').should(
        'have.length',
        wrapper.component.reservations.length
      );
    });
  });

  it('should show the first reservation client name', () => {
    cy.mount(ReservationsPage).then((wrapper) => {
      const firstReservation = wrapper.component.reservations[0];
      cy.contains(firstReservation.clientName).should('exist');
    });
  });

  it('should show the new reservation button', () => {
    cy.mount(ReservationsPage);
    cy.contains('Nueva Reserva').should('exist');
  });
});