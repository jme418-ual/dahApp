describe('App E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="login-username"]').type('tester');
    cy.get('[data-testid="login-password"]').type('1234');
    cy.get('[data-testid="login-submit"]').click();
  });

  it('should navigate to client detail and show the client ID', () => {
    cy.visit('/tabs/clients');
    cy.get('[data-testid^="client-item-"]').first().click();
    cy.url().should('include', '/client-detail/');
    cy.get('[data-testid="client-detail-id"]').should('exist');
    cy.contains('ID:').should('exist');
  });

  it('should go back to clients tab from client detail when entered through navigation', () => {
    cy.visit('/tabs/clients');
    cy.get('[data-testid^="client-item-"]').first().click();
    cy.get('[data-testid="client-detail-back"]').click();
    cy.url().should('include', '/tabs/clients');
  });

  it('should go to clients tab using defaultHref when entering client detail directly', () => {
    cy.visit('/client-detail/1');
    cy.get('[data-testid="client-detail-back"]').click();
    cy.url().should('include', '/tabs/clients');
  });

  it('should navigate to new reservation and return to reservations tab', () => {
    cy.visit('/tabs/reservations');
    cy.get('[data-testid="new-reservation-button"]').click();
    cy.url().should('include', '/new-reservation');
    cy.contains('Nueva Reserva').should('exist');
    cy.get('[data-testid="new-reservation-back"]').click();
    cy.url().should('include', '/tabs/reservations');
  });

  it('should return to reservations tab using defaultHref when entering new reservation directly', () => {
    cy.visit('/new-reservation');
    cy.get('[data-testid="new-reservation-back"]').click();
    cy.url().should('include', '/tabs/reservations');
  });

  it('should logout and redirect to login page', () => {
    cy.visit('/tabs/products');
    cy.get('[data-testid="products-logout"]').click();
    cy.url().should('include', '/login');
    cy.contains('Iniciar Sesión').should('exist');
  });
});
