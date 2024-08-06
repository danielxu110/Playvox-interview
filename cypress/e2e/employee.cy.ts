import PIMPage from "../../PageObject/EmployeePage";

const firstName: string = 'Daniel';
const lastName: string = 'Xu';
const id: string = '786756';
const fullName: string = firstName + ' ' + lastName;
const licenseId: string = 'abcd8979';
const pim = new PIMPage();

describe('Test creating and update items', () => {

    beforeEach(() => {
        cy.login();
        cy.visit('/web/index.php/pim/viewEmployeeList');
    });

    after(() => {
        pim.deleteEmployee(fullName);
    })

    it('Create employee', () => {
        pim.openRecruitmentPage();
        pim.addEmployee(firstName, lastName, id);
        cy.get('.orangehrm-edit-employee-name').should('contain', firstName + ' ' + lastName);
    });

    it('Create a same employee and verify the error message', () => {
        pim.openRecruitmentPage();
        pim.duplicateEmployee(firstName, lastName, id);
    });

    it('Search and update employee', () => {
        pim.openRecruitmentPage();
        pim.searchEmployee(fullName);
        pim.editEmployee(fullName,licenseId);
    });
})