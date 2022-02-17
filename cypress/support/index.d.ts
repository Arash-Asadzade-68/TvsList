/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select via the data-component-name
     * @example cy.getByComponentName('TableDelivery1')
     */
    getByComponentName(value: string, args?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable<Element>;
    /**
     * Custom command to find via the data-component-name
     * @example cy.findByComponentName('TableDelivery1')
     */
    findByComponentName(selector: string): Chainable<Element>;
  }
}
