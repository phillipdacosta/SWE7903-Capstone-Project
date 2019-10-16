export class UserModel {


    public _firstName: string;
    public _lastName: string;
    public _password: string;
    public _innotas_id : string;
    public _email: string
    public _role: string;

    constructor(fname="", lname="", pass="", email="",role="", innotas_id = ""){
        this.firstName = fname;
        this.lastName = lname;
        this.password = pass;
        this.email = email;
        this.role = role;
        this._innotas_id = innotas_id;
    }

    set firstName(name: string){
        this._firstName = name;
    }

    set lastName(name: string){
        this._lastName = name;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
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
