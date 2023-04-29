export class JobFilter{
    keyword: string;
    location: string;
    pagesize: number;
    pagenumber: number;

    constructor(keyword: string, location: string, pagesize: number, pagenumber: number){
        this.keyword = keyword;
        this.location = location;
        this.pagesize = pagesize;
        this.pagenumber = pagenumber;
    }
}