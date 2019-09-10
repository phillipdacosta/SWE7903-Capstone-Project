export class UserModel {


    private _firstName: string;
    private _lastName: string;
    private _password: string;
    private _email: string
    private _role: string;

    constructor(fname="", lname="", pass="", email="",role=""){
        this.firstName = fname;
        this.lastName = lname;
        this.password = pass;
        this.email = email;
        this.role = role;
    }

    set firstName(name: string){
        this._firstName = name
    }

    set lastName(name: string){
        this._lastName = name
    }

    set password(pass: string){
        this._password = pass
    }

    set email(email: string){
        this._email = email
    }

    set role(role: string){
        this._role = role
    }
}
