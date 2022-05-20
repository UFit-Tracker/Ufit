import { makeAutoObservable } from "mobx"
import {setToken, getToken, clearToken} from "@/utils/index"

class LoginStore {
    token = getToken()||''

    constructor(){
        makeAutoObservable(this)

    }
    getToken = async({username, password})=>{
        // console.log('token', username, password)
        const res = await http.post('#', 
        // qs.stringify({username, password})
        {username, password}
        )

        // use token to store
        this.token = res.data.token

        setToken(res.data.token)

    }


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

    showLog(){
        console.log('show log')
    }


}

const loginStore = new LoginStore()
export default loginStore