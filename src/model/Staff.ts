export class Staff {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender:string;
    joinDate: string;
    dob: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressLine5: string;
    contactNumber: string;
    email: string;
    role: string;


    constructor(id: string, firstName: string, lastName: string, designation: string, gender: string, joinedDate: string, dob: string, addressLine1: string, addressLine2: string, addressLine3: string, addressLine4: string, addressLine5: string, contactNumber: string, email: string, role: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joinDate = joinedDate;
        this.dob = dob;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.addressLine3 = addressLine3;
        this.addressLine4 = addressLine4;
        this.addressLine5 = addressLine5;
        this.contactNumber = contactNumber;
        this.email = email;
        this.role = role;
    }
}