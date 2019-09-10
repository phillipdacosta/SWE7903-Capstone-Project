import { TeamMemberModel } from './team-member.model';

export class Team {
    members: Array<TeamMemberModel>;

    constructor(){
        this.members = []
    }

    addMember(fName: string = "", lName: string="", id: string=""){
        this.members.push(new TeamMemberModel(fName, lName, id));
    }


}
