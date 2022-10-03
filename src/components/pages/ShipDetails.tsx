import React, { memo, useState, useEffect, useContext } from "react"

import {
  Box,
  Typography,
  Button
} from "@mui/material"

import { useLocation, Link } from "react-router-dom"


type State = {
  id: number | undefined,
  selectShip: string | undefined
}

export const ShipDetails = memo(() => {
  const location = useLocation()
  const {id, selectShip } = location.state as State


  console.log("ship detailのレンダリング")

  return(
    <>
      <Box>
        <Typography variant="h5" component="h5" sx={{mb:1}}>整備情報</Typography>
        <Typography variant="h6" component="div" sx={{px:1}}>
          <div>
            選択中の機番 : {selectShip}
          </div>
            <Link to={`create`} state={{id: id, selectShip: selectShip}}>
              <Button variant="contained">新規作成</Button>
             </Link>
        </Typography>
      </Box>
    </>
  )
})