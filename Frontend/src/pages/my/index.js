import React, {useEffect} from 'react'
import { observer } from 'mobx-react-lite'
import { setToken } from '@/utils'
import MyPage from '../my-page'
import { useAuth0 } from '@auth0/auth0-react'

const My= () => {


    const { getAccessTokenSilently, isAuthenticated } = useAuth0();


    useEffect(() => {
        
        const getnewToken= async () => {
              const accessToken = await getAccessTokenSilently();
              setToken(accessToken);
        }
        getnewToken();

        }, [getAccessTokenSilently]);
        
    //    console.log(profileStore.changeName)
    return (
        isAuthenticated&&(
        <>
            <MyPage/>

        </>
    )
    )
}

export default observer(My)
