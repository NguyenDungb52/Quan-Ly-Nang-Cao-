import { User } from "../model/user"

    export class ManageUser {
        listUser : User [] = []
        constructor() {
            this.listUser.push(new User('admin','admin',true))
        }

    signIn(t : User){
        for( let i = 0 ; i< this.listUser.length; i++){
                if( this.listUser[i].getAccount() == t.getAccount() && this.listUser[i].getPassword() == t.getPassword()  && this.listUser[i].getStatus()==true){
                   return this.listUser[i]
                }

                if( this.listUser[i].getAccount() == t.getAccount() && this.listUser[i].getPassword() == t.getPassword()  && this.listUser[i].getStatus()==false){
                    return 'tai khoan da bi khoa'
                 }
        }
       return 'tai khoan khong ton tai '        
    } 
    
    signUp( t : User){
        this.listUser.push(t)
    }
    showUser(){
        console.log(this.listUser)
    }
    lockUser(account :string){
        for(let i = 0; i< this.listUser.length; i++){
            if(this.listUser[i].getAccount()== account){
                let accounts = this.listUser[i].getAccount()
                let password = this.listUser[i].getPassword()
                let status = false
                let newUser = new User(accounts,password,status)
                this.listUser[i] = newUser
               return console.log(this.listUser)
            }
        }

        return `khong tim thay tai khoan`
    }

    unLockUser(account :string){
        for(let i = 0; i< this.listUser.length; i++){
            if(this.listUser[i].getAccount()== account){
                let accounts = this.listUser[i].getAccount()
                let password = this.listUser[i].getPassword()
                let status = true
                let newUser = new User(accounts,password,status)
                this.listUser[i] = newUser
               return console.log(this.listUser)
            }
        }

        return `khong tim thay tai khoan`
    }

   
    }