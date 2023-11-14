import { certificate } from "@/data";

describe('resume test', () => {
  it('render the heading Certificate on the screen', () => {
    cy.visit('http://localhost:3000/resume');
    cy.get('h2').contains('Certificate');
  });

  it('render the Certificates on the screen', () => {
    cy.visit('http://localhost:3000/resume');

    cy.get('[data-testid="cypress-certificates"]').each((item, index) => {
      cy
        .wrap(item)
        .should('contain.text', certificate[index].name)
    })
  })
})