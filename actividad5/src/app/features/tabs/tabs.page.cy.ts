/// <reference types="cypress" />
/// <reference path="../../../../cypress/support/component.ts" />

import { TabsPage } from './tabs.page';

describe('TabsPage Component', () => {
  it('should create the component', () => {
    cy.mount(TabsPage).then((wrapper) => {
      expect(wrapper.component).to.not.be.undefined;
    });
  });

  it('should show the three tab labels', () => {
    cy.mount(TabsPage);
    cy.contains('Clientes').should('exist');
    cy.contains('Reservas').should('exist');
    cy.contains('Productos').should('exist');
  });

  it('should show the correct tab icons', () => {
    cy.mount(TabsPage);
    cy.get('ion-tab-button ion-icon[name="people"]').should('exist');
    cy.get('ion-tab-button ion-icon[name="calendar"]').should('exist');
    cy.get('ion-tab-button ion-icon[name="cube"]').should('exist');
  });

  it('should show the logout button', () => {
    cy.mount(TabsPage);
    cy.contains('Cerrar Sesión').should('exist');
  });
});