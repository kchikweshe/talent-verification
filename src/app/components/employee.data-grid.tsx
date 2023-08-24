import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Department, Employee, Role } from '../data/employee.model';
import { NamedEntity } from '../data/generic-named-entity.model';

// Import the required models and classes

// Sample employee data
const employees: Employee[] = [
  new Employee('John', 'Doe', new Role('Manager'), new Department('HR'), 'E001'),
  new Employee('Jane', 'Smith', new Role('Engineer'), new Department('IT'), 'E002'),
  new Employee('Michael', 'Johnson', new Role('Analyst'), new Department('Finance'), 'E003'),
  new Employee('Emily', 'Williams', new Role('Assistant'), new Department('Marketing'), 'E004'),
  new Employee('David', 'Brown', new Role('Manager'), new Department('Operations'), 'E005'),
];

// Convert employee data to rows format
const rows: GridRowsProp = employees.map((employee, index) => ({
  id: index + 1,
  dept:employee.department?.name,
  companyName:employee.company?.name,
  roleName:employee.role.name,
  ...employee,
}));

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'roleName', headerName: 'Role', width: 150 },
  { field: 'companyName', headerName: 'Company', width: 150 },

  { field: 'dept', headerName: 'Department', width: 150 },
];

export default function EmployeeDataGrid() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid  data-cy={"employee-data-grid"} rows={rows} columns={columns} />
    </div>
  );
}