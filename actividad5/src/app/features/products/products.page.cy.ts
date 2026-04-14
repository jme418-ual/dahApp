/// <reference types="cypress" />
/// <reference path="../../../../cypress/support/component.ts" />

import { ProductsPage } from './products.page';

describe('ProductsPage Component', () => {
  it('should create the component', () => {
    cy.mount(ProductsPage).then((wrapper) => {
      expect(wrapper.component).to.not.be.undefined;
    });
  });

  it('should load products from the service', () => {
    cy.mount(ProductsPage).then((wrapper) => {
      expect(wrapper.component.products).to.be.an('array').and.not.be.empty;
    });
  });

  it('should render one card per product', () => {
    cy.mount(ProductsPage).then((wrapper) => {
      cy.get('ion-card.product-card').should(
        'have.length',
        wrapper.component.products.length
      );
    });
  });

  it('should show the first product name', () => {
    cy.mount(ProductsPage).then((wrapper) => {
      const firstProduct = wrapper.component.products[0];
      cy.contains(firstProduct.name).should('exist');
    });
  });

  it('should show the logout button', () => {
    cy.mount(ProductsPage);
    cy.contains('Cerrar Sesión').should('exist');
  });
});