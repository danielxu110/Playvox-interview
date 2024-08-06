export default class PIMPage {

    openRecruitmentPage() {
        cy.get('.oxd-topbar-header-title').should('contain', 'PIM');
        cy.get('.oxd-table-filter-header-title').should('contain', 'Employee Information');
        cy.get('.oxd-loading-spinner-container').should('not.exist');
    }

    addEmployee(firstName: string, lastName: string, id: string) {
        cy.get('nav.oxd-topbar-body-nav > ul').find('li').contains('Add Employee').click();
        cy.get('.orangehrm-main-title').should('contain', 'Add Employee');
        cy.get('.oxd-loading-spinner-container').should('not.exist');
        cy.get('input[name="firstName"]').type(firstName);
        cy.get('input[name="lastName"]').type(lastName);
        cy.get('.oxd-grid-2.orangehrm-full-width-grid').find('input').clear().type(id);
        cy.get('button[type="submit"]').click();
    }

    searchEmployee(fullName: string) {
        cy.get('.oxd-grid-item.oxd-grid-item--gutters').first().find('input').type(fullName);
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-table-card').should('have.length', 1);
    }
    
    editEmployee(fullName: string, licenseId: string) {
        cy.get('.oxd-table-cell-actions').find('button').first().click();
        cy.get('.orangehrm-edit-employee-name').should('contain', fullName);
        cy.get('.oxd-loading-spinner-container').should('not.exist');
        cy.get('.oxd-form-row').eq(1).find('.oxd-grid-3').eq(1).find('input').eq(0).clear().type(licenseId);
        cy.get('button').filter(':contains(" Save ")').eq(0).click();
        cy.get('.oxd-toast-content.oxd-toast-content--success').should('be.visible');
        cy.get('.oxd-loading-spinner-container').should('not.exist');
    }

    deleteEmployee(fullName: string) {
        cy.get('nav.oxd-topbar-body-nav > ul').find('li').contains('Employee List').click();
        cy.get('.oxd-table-filter-header-title').should('contain', 'Employee Information');
        cy.get('.oxd-loading-spinner-container').should('not.exist');
        this.searchEmployee(fullName);
        cy.get('.oxd-table-cell-actions').find('button').eq(1).click();
        cy.get('.orangehrm-modal-header').should('contain', 'Are you Sure?');
        cy.get('button.oxd-button--label-danger').click();
        cy.get('.oxd-toast-content--success').should('be.visible');
        cy.get('.oxd-loading-spinner-container').should('not.exist');
    }

    duplicateEmployee(firstName: string, lastName: string, id: string) {
        this.addEmployee(firstName, lastName, id);
        cy.get('.oxd-input-field-error-message').should('contain', 'Employee Id already exists');
    }
}