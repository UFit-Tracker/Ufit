import { makeAutoObservable } from "mobx"

class LoginStore {
    list= [
        {
            id:1,
            name: 'loginbox',
            show: true
        },

    ]
    profile ={
        accountName: 'xiaoming',
        age:12,
        email: 'xm@gmail.com',
    }
    constructor(){
        makeAutoObservable(this)
    }
    showLog(){
        console.log('show log')
    }


}

const loginStore = new LoginStore()
export default loginStore