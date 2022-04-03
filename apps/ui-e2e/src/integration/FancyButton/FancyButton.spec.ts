describe('ui: FancyButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fancybutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FancyButton!');
    });
});
