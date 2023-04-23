export class loginDetail{
    loginType: string;
    userName: string;
    password: string

    constructor(loginType: string, userName: string, password: string){
        this.loginType = loginType;
        this.userName = userName;
        this.password = password;
    }
}