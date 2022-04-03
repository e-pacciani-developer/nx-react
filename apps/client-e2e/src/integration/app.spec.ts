import { getGreeting } from '../support/app.po';

describe('client', () => {
  beforeEach(() => cy.visit('/'));

  it('should display a button', () => {
    cy.get('[data-test-id="pippo"]').should('exist');

    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    // getGreeting().contains('Welcome client');
  });
});
