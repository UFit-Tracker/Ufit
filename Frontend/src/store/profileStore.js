import { makeAutoObservable } from "mobx"
import {setToken, getToken, clearToken} from '@/utils/index'
import {http} from '@/utils/http'
import { useAuth0 } from "@auth0/auth0-react";


class ProfileStore {
    
    token = getToken()||''

    log = false

    getLog = ()=>{
        const { user, isAuthenticated } = useAuth0()
        const log = getToken()
        if(log){
            this.log = true
        }else{
            this.log = false
        }
    }

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


    profile ={
        accountName: 'xiaoming',
        age:12,
        email: 'xm@gmail.com',
    }
    showLog(){
        console.log('show log')
    }
    changeName(n){
        this.profile.accountName='new name';
    }


}

const profileStore = new ProfileStore()
export default profileStore