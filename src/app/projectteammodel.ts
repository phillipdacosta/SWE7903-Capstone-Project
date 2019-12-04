export class Projectteammodel {

    project_id : string;
    project_manager : string;
    business_analyst : string;
    product_owner : string;
    qa : string

    test_environment : string;

    constructor(project_id = "", project_manager = "", business_analyst = "", product_owner = "", qa = "", test_environment = ""){

        this.project_id = project_id;
        this.project_manager = project_manager;
        this.business_analyst = business_analyst;
        this.product_owner = product_owner;
        this.qa = qa;
        this.test_environment = test_environment;

    }
}
