import { Company } from "./company.model"
import { NamedEntity } from "./generic-named-entity.model"

export class Employee {
    employeeID?: string
    role: Role
    firstName: string
    lastName: string
    department?:Department
    company!:Company



    constructor(firstName: string, lastName: string,role: Role, department?: Department,employeeID?: string) {
        this.employeeID = employeeID;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
   
}

export class Department extends NamedEntity{

    readonly id:string='0'

    constructor(name:string){
        super(name);
    }

    
}
export class Role extends NamedEntity{
    readonly id:string='0'

    dateStarted: Date = new Date();
    dateLeft?: Date
    duties: Array<Duty> = []
    employee?:Employee

    constructor(
        name :string,
        dateLeft?:Date

    ){
        super(name)
        this.name=name
        this.dateLeft=dateLeft
    }
  

}

export class Duty extends NamedEntity{
    readonly id:string='0'


    constructor(name:string){
        super(name)
    }
}

