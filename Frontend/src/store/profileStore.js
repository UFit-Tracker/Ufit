import { makeAutoObservable } from "mobx"

class ProfileStore {
    
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