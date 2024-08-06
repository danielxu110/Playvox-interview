import LoginPage from "../../PageObject/LoginPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const loginInstance = new LoginPage();

describe('log in testing', () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login');
    });

    it('log in with invalid username and valid password and verify error message', () => {
        loginInstance.enterUsername('abcd');
        loginInstance.enterPassword('admin123');
        loginInstance.submit();
        loginInstance.assertErrorMessage();
    });

    it('log in with valid username and invalid password and verify error message', () => {
        loginInstance.enterUsername('Admin');
        loginInstance.enterPassword('123');
        loginInstance.submit();
        loginInstance.assertErrorMessage();
    });

    it('log in with valid username and password', () => {
        loginInstance.enterUsername('Admin');
        loginInstance.enterPassword('admin123');
        loginInstance.submit();
        loginInstance.assertLoginSuccess();
    });

    it('log out', () => {
        loginInstance.enterUsername('Admin');
        loginInstance.enterPassword('admin123');
        loginInstance.submit();
        loginInstance.assertLoginSuccess();
        cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
        loginInstance.logout();
    });
})