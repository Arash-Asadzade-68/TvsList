
Cypress.Commands.add("getByComponentName", (selector: string, ...args) => {
    return cy.get(`[data-component-name="${selector}"]`, ...args);
});

Cypress.Commands.add("findByComponentName", (selector: string, ...args) => {
    return cy.find(`[data-component-name=${selector}]`, ...args);
})
