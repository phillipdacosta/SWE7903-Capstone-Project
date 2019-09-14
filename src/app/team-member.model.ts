import { UserModel } from './user.model';

export class TeamMemberModel extends UserModel{
    id: string;
    projectRole: string;
    projectRoleId: string;
    constructor(fName: string = "", lName: string = "", id: string = ""){
        super(fName, lName)
        this.id = id;
    }

    get name(){
        return this.firstName + " " + this.lastName;
    }
}
