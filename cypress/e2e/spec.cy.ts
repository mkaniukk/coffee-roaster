describe('template spec', () => {
    it('passes', () => {
        cy.visit('/');
    });
    it('passes', () => {
        cy.visit('/coffees');
    });
    it('passes', () => {
        cy.visit('/login');
    });
    it('passes', () => {
        cy.visit('/map');
    });
    it('passes', () => {
        cy.visit('/profile');
    });
});
