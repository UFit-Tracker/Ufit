import loginStore from "./loginStore";
import React from 'react'


class RootStore{
    constructor(){
        this.loginStore = loginStore
    }
}

const rootStore = new RootStore()
const context =React.createContext(rootStore)
const  useStore = () => React.useContext(context)

export {useStore}