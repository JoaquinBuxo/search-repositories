describe('Pagination Functionality', () => {
  it('should navigate through pages', () => {
    // Add default query
    const query = 'test query';

    // Visit the page
    cy.visit('/');

    // Type the search query
    cy.get('input[name="search"]').type(query);

    // Submit the search form
    cy.get('form').submit();

    // Wait for the API call to complete
    cy.wait(300);

    // Get Pagination by data-testid
    cy.get('[data-testid="pagination"]').as('pagination');

    // Check if the Pagination component exists
    cy.get('@pagination').should('exist');

    // Click on the next page button
    cy.get('@pagination').find('[data-testid="NavigateNextIcon"]').click();

    // Check if the page number has changed
    cy.get('button[aria-current="true"]')
      .should('exist')
      .and('contain.text', '2');

    // Click on a specific page
    cy.get('@pagination').contains('4').click();

    // Check if the page number has changed
    cy.get('button[aria-current="true"]')
      .should('exist')
      .and('contain.text', '4');
  });
});
