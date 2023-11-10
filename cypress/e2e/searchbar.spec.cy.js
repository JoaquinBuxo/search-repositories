// searchBar.spec.js

describe('SearchBar Component', () => {
  it('fetches and displays repositories when a non-empty search query is submitted', () => {
    // Visit the page
    cy.visit('/');

    // API call
    cy.intercept('GET', '**/search/repositories**').as('searchRepos');

    // Type a search query
    cy.get('input[name="search"]').type('test query');

    // Submit the form
    cy.get('[data-testid="search-form"]').submit();

    // Wait for the API call to complete
    cy.wait('@searchRepos').its('response.statusCode').should('eq', 200);

    // Check if repositories are displayed
    cy.get('[data-testid="repository-card"]').should('be.visible');

    // Check if the footer (pagination) is rendered
    cy.get('[data-testid="pagination"]').should('be.visible');
  });
});
