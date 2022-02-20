/// <reference types = "cypress" />

import { TodoPage } from "../../page-objects/todo-page";

describe('Todo actions', () =>{  // to group the tests 
    const todopage = new TodoPage
    beforeEach( () => {
        todopage.navigate();
        todopage.addTodo("Clean room");
    })

it("Should add a new todo to the list", () => {   
    todopage.validateTodotxt(0, 'Clean room')
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