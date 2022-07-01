import React from 'react'
import './index.css'
// import styles from './index.css'
import { useAuth0 } from '@auth0/auth0-react';
import MyProfileFormIndex from './my-profile-form';




const MyProfileForm = () => {
  // const {user} =useAuth0();
  // console.log(user)

  return (
    <>
      <MyProfileFormIndex />
    </>
  )
}

export default MyProfileForm