import { useState, useEffect } from 'react'

import { useAuthenticator } from '@aws-amplify/ui-react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'


export const Home = () => {
  const { user , signOut} = useAuthenticator((context)=> [
    context.user,
    context.signOut,
  ]) 

  const navigate = useNavigate()

  const logOut =  async(e: React.MouseEvent<HTMLButtonElement>) => {
    signOut();
    navigate('/auth');
  }

  return(
    <>
      Homeページ 
      <Typography>
        {user?.username}
      </Typography>

      <Button  onClick={logOut}>サインアウト</Button>
    </>
  )
}