import profileStore from "./profileStore";
import React from 'react'

class RootStore{
    constructor(){
        this.profileStore = profileStore
    }
}

const rootStore = new RootStore()
const context =React.createContext(rootStore)
const  useStore = () => React.useContext(context)

export {useStore}