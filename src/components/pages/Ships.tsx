import React, { memo } from 'react';

import { Box, Typography} from "@mui/material";
import { Outlet } from "react-router-dom"

import { ShipList } from "components/utils/ShipList"

import { useAuthenticator } from "@aws-amplify/ui-react"

import { ships } from "Data/ships"

export const Ships = memo(() => {
  const{ user } = useAuthenticator((context) => [context.user])

  return(
    <>
      <Box display="flex">
        <ShipList ships={ships} />
        <Outlet />
      </Box>
    </>
  )
})