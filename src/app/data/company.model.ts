import { Employee } from "./employee.model";

export class Company{
    name!:string;
    dateRegistration!:Date
    registrationNumber!:String
    address!:String
    contactPerson!:String
    numberEmployees:Number=5
    contactPhone:String=''
    emailAddress:String=''
    employees!:Employee[]

    

  constructor(
    name: string,
    dateRegistration: Date,
    registrationNumber: string,
    address: string,
    contactPerson: string
  ) {
    this.name = name;
    this.dateRegistration = dateRegistration;
    this.registrationNumber = registrationNumber;
    this.address = address;
    this.contactPerson = contactPerson;
  }

  
}