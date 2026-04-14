/// <reference types="cypress" />
/// <reference path="../../../../cypress/support/component.ts" />

import { ClientsPage } from './clients.page';

describe('ClientsPage Component', () => {
  it('should create the component', () => {
    cy.mount(ClientsPage).then((wrapper) => {
      expect(wrapper.component).to.not.be.undefined;
    });
  });

  it('should load clients from the service', () => {
    cy.mount(ClientsPage).then((wrapper) => {
      expect(wrapper.component.clients).to.be.an('array').and.not.be.empty;
    });
  });

  it('should render one item per client', () => {
    cy.mount(ClientsPage).then((wrapper) => {
      cy.get('ion-item').should('have.length', wrapper.component.clients.length);
    });
  });

  it('should render client name, email and phone', () => {
    cy.mount(ClientsPage).then((wrapper) => {
      const firstClient = wrapper.component.clients[0];

      expect(firstClient.name).to.exist;
      expect(firstClient.email).to.exist;
      expect(firstClient.phone).to.exist;

      cy.contains(firstClient.name!);
      cy.contains(firstClient.email!);
      cy.contains(firstClient.phone!);
    });
  });

  it('should render client icons', () => {
    cy.mount(ClientsPage);
    cy.get('ion-icon[name="person"]').should('exist');
    cy.get('ion-icon[name="mail"]').should('exist');
    cy.get('ion-icon[name="call"]').should('exist');
  });
});