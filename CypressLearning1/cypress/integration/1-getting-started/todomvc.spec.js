/// <reference types = "cypress" />

it("to launch the browser and navigate", () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh");
    cy.get('.new-todo', {timeout: 6000}).type('Clean room {Enter}');  // manually set the timeout for 6 secs
    cy.get('label').should('have.text', "Clean room");
    cy.get('.toggle').should('not.be.checked');
    cy.get('.toggle').click()
    cy.get('.toggle').should('be.checked');
    cy.get('label').should('have.css', 'text-decoration-line',  'line-through');
    //cy.get('.clear-completed').click()
    //or
    cy.contains('Clear').click()
    cy.get('.todo-list').should('not.have.descendants', 'li');
})