import React, { memo, useState, useEffect, useContext } from "react"

import { Amplify, API, graphqlOperation } from "aws-amplify"
import { listMaintenances } from "graphql/queries"

import awsExports from "aws-exports"


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

Amplify.configure(awsExports)

export const ShipDetails = memo(() => {
  const location = useLocation()
  const {id, selectShip } = location.state as State
  const [maintenances, setMaintenances] = useState([])

  console.log("ship detailのレンダリング")
  console.log(maintenances)

  useEffect(() => {
    const fetchMaintenances = async() => {
      try{
        const maintenanceData: any = await API.graphql(graphqlOperation(listMaintenances))
        const maintenances = maintenanceData.data.listMaintenances.items
        setMaintenances(maintenances)
      }catch(err){
        console.log(err);
      }
    }
    fetchMaintenances();
  }, [])

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