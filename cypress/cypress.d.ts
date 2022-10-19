/// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      getById(id: string): Chainable;
    }
  }
}
