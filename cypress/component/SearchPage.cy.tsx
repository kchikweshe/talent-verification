import { SearchPage } from "@/app/SearchPage";
import EmployeeDataGrid from "@/app/components/employee.data-grid";

describe('SearchPage',{
  viewportHeight: 720,
  viewportWidth: 1080,
}, () => {

  
  beforeEach(() => {
    cy.mount(<SearchPage />);
  });

  it('displays search material widget for last name with label "Last Name"', () => {
    cy.get('[data-cy="name"] label').should('have.text', 'Search by name');
  });

  it('displays search material widget for companies name with label "Search by company"', () => {
    cy.get('[data-cy="company"]').should('exist');
    cy.get('[data-cy="company"] label').should('have.text', 'Search by company');
  });

  it('displays search material widget for department name with label "Search by department"', () => {
    cy.get('[data-cy="department"]').should('exist');
    cy.get('[data-cy="department"] label').should('have.text', 'Search by department');
  });

  it('displays search material widget for role name with label "Search by role"', () => {
    cy.get('[data-cy="role"]').should('exist');
    cy.get('[data-cy="role"] label').should('have.text', 'Search by role');
  });

  it('displays date pickers for Date joined and Date Left', () => {
    cy.get('[data-cy="date-joined"]').should('exist');
    cy.get('[data-cy="date-left"]').should('exist');
  });

  it('displays employees data grid with default message "No records found"', () => {
    cy.get('[data-cy="employee-data-grid"]').should('exist');
    cy.get('[data-cy="employee-data-grid"]').contains('No records found');
  });

  it('mounts EmployeeDataGrid component', () => {
 
    // cy.contains('EmployeeDataGrid').should('exist');
    cy.get('EmployeeDataGrid').should('be.visible');
  });

  
});