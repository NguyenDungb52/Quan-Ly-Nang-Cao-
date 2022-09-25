export class User {
    private  account : string 
    private password : string 
    private status : boolean
     constructor( account : string ,password : string, status : boolean)  {
             this.account = account
             this.password = password
             this.status = status
     }
     public setAccount(account : string):void{
         this.account = account
     }

     public getAccount() : string{
         return this.account
     }
     public setPassword(password : string) : void {
         this.password = password
     }
     public getPassword() : string {
         return this.password
     }
     public setStatus(status : boolean) : void{
        this.status = status
     }
     public getStatus() : boolean{
            return this.status
     }


}