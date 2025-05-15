export class Student{
    name: String;
    address: String;
    phone_number: String;
    control_number: String;
    id?: number;

    constructor(id: number, name: string, address: string, phoneNumber: String, controlNumber: string ){
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone_number = phoneNumber;
        this.control_number = controlNumber;
    
    }
}