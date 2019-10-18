import { UserModel } from './user.model';

export class TeamMemberModel extends UserModel{
    id: string;
    projectRole: string;
    projectRoleId: string;
    constructor(fName: string = "", lName: string = "", id: string = "", password: string = "", email: string = "", role : string = "", innotas_id : string = ""){
        super(fName, lName, password, email, role, innotas_id)
        this.id = id;
    }

    get name(){
        return this.firstName + " " + this.lastName;
    }
}
