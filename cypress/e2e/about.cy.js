it('titles are correct', () => {
  const page = cy.visit('/about');

  page.get('title').should('have.text', 'About Me')
  page.get('h1').should('have.text', 'About Me');
});