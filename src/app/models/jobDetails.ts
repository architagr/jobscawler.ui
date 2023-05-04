export class JobDetail{
    _id: string;
    title: string;
    companyName: string;
    location: string;
    companyDetailsUrl: string;
    jobType: string;
    jobModel: string;
    experience: string;
    description: string;
    jobLink: string;

    constructor(id:string, title:string, companyName:string, location:string, companyDetailsUrl:string
        , jobType:string, jobModel:string, experience:string, description:string, jobLink:string){
            this._id = id;
            this.title = title;
            this.companyName = companyName;
            this.location = location;
            this.companyDetailsUrl = companyDetailsUrl;
            this.jobType = jobType;
            this.jobModel = jobModel;
            this.experience = experience;
            this.description = description;
            this.jobLink = jobLink;
        }
}

export class JobResponse{
    jobs: JobDetail[];
    pageSize: number;
    pageNumber: number;
    
    constructor(jobs: JobDetail[], pageSize: number, pageNumber: number){
        this.jobs = jobs;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
    }
}