import { useState, useEffect } from 'react'

import { useAuthenticator } from '@aws-amplify/ui-react'


export const Home = () => {
  const { user , signOut} = useAuthenticator((context)=> [context.user]) 


  return(
    <>
      Homeページ {user.username}

      <button onClick={signOut}>SignOut</button>
    </>
  )
}