
export class Project {

    _go_live_date: string;
    _groject_RYG_Color: string;
    _last_Updated: string;
    _project_Manager: string;
    _project_Manager_ID: string
    _project_Start_Date: string;
    _project_Status: string;
    _project_Title: string;
    _project_Work_Type: string;
    _id: string;


    constructor(date: string = "", color: any = "",update_time: any = "",proj_man: any = "",proj_man_id: any = "",start_date: any = "",status: any = "",title: any = "",work_type: any = "",id_db: any = "") {
        this._go_live_date = date;
        this._groject_RYG_Color = color;
        this._last_Updated = update_time;
        this._project_Manager = proj_man;
        this._project_Manager_ID = proj_man_id;
        this._project_Start_Date = start_date;
        this._project_Status = status;
        this._project_Title = title;
        this._project_Work_Type = work_type
        this._id = id_db;

    }
}
