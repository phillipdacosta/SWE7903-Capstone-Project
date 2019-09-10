import { Team } from './team.model';

export class Project {

    name: string;
    team: Team;
    testEnv: any;

    constructor(name: string = "", team: Team = new Team(), env: any = ""){
        this.name = name;
        this.team = team;
        this.testEnv = env;
    }
}
