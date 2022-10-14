import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Button, Typography, Box, Card } from '@mui/material'

import { Link } from 'react-router-dom'


export const Home = () => {
  const { user } = useAuthenticator((context)=> [context.user])

  return(
    <>
      <Box sx={{ width: 650, m:"auto", p:1}}>
        <Typography variant="h5" component="h5" sx={{mb:1}}>
          ユーザー名 : {user?.username}
        </Typography>
        <Link to={"ships"}>
          <Button variant="contained">
            機材管理へ
          </Button>
        </Link>

      </Box>


    </>
  )
}