it('should contain my name', () => {
  const page = cy.visit('/');

  page.get('title').should('contain', 'György Balássy')
  page.get('h1').should('have.text', 'Hello, my name is György Balássy');
});