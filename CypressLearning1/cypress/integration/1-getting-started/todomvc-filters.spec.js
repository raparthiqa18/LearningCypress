/// <reference types ='cypress' />

describe('Filtering', () => {
    beforeEach(() => {
        cy.visit("http://todomvc-app-for-testing.surge.sh");
        cy.get('.new-todo').type('Clean room {Enter}');  
        cy.get('.new-todo').type('Learn javascript {Enter}');  
        cy.get('.new-todo').type('Use Cypress {Enter}');  
 
        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('It should filter "Active" todos', () => {
            cy.contains('Active').click();
            cy.get('.todo-list li').should('have.length', 2);
    })

    it('It should filter "Completed" todos', () => {
        cy.contains('Completed').click();
        cy.get('.todo-list li').should('have.length', 1);
    })

    it('It should filter "All" todos', () => {
            cy.contains('All').click();
            cy.get('.todo-list li').should('have.length', 3);
    })

})
