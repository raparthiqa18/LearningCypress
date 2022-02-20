/// <reference types = "cypress" />

describe('Todo actions', () =>{  // to group the tests 

    beforeEach( () => {
        cy.visit("http://todomvc-app-for-testing.surge.sh");
        cy.get('.new-todo', {timeout: 6000}).type('Clean room {Enter}');  // manually set the timeout for 6 secs
    })

it("Should add a new todo to the list", () => {
   
    cy.get('label').should('have.text', "Clean room");
    cy.get('.toggle').should('not.be.checked');
})
 
it('Should mark todo as completed', () => {
    cy.get('.toggle').click()
    cy.get('.toggle').should('be.checked');
    cy.get('label').should('have.css', 'text-decoration-line',  'line-through');
})

it('Should clear the todo list and validate', () => {
    cy.get('.toggle').click()
    cy.contains('Clear').click()
    cy.get('.todo-list').should('not.have.descendants', 'li');
})
})