import { mount } from 'cypress/angular';
import { provideRouter } from '@angular/router';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', (component, config: any = {}) => {
  const providers = [provideRouter([]), ...(config.providers ?? [])];
  return mount(component, { ...config, providers });
});
