export class Admin {
       private  account : string 
       private password : string
        constructor( account : string ,password : string) {
                this.account = account
                this.password = password
                
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

}