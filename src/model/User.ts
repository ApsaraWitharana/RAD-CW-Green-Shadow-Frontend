
export class User{
    name: string;
    email: string;
    password:number
    role : string;


    constructor(name: string, email: string, password: number, role: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}