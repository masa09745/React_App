import React, { memo } from 'react';

import { Box, Typography} from "@mui/material";
import { Outlet } from "react-router-dom"

import { ShipList } from "components/utils/ShipList"

import { ships } from "Data/ships"

export const Ships = memo(() => {

  console.log("shipのレンダリング")

  return(
    <>
      <Box>
        <Typography variant="h5" component="h5" sx={{ mb:1 }}>
          機材一覧
        </Typography>
        <ShipList ships={ships} />
        <Outlet />
      </Box>
    </>
  )
})