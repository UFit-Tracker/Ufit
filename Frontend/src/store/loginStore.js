import { makeAutoObservable } from "mobx"

class LoginStore {
    list= [
        {
            id:1,
            name: 'loginbox',
            show: true
        },

    ]
    constructor(){
        makeAutoObservable(this)
    }
    showLog(){
        console.log('show log')
    }


}

const loginStore = new LoginStore()
export default loginStore