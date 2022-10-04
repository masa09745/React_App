import React, { memo, useState, useEffect, useContext } from "react"

import { Amplify, API, graphqlOperation } from "aws-amplify"
import { listMaintenances } from "graphql/queries"

import awsExports from "aws-exports"
import type {MaintenanceData} from "Types/maintenance"


import {
  Box,
  Typography,
  Button
} from "@mui/material"

import { useLocation, Link } from "react-router-dom"
import { ListMaintenancesQuery, Maintenance } from "API"
import { GraphQLResult } from '@aws-amplify/api';

import { DetailList } from "components/utils/DetailList"


type State = {
  id: number | undefined,
  selectShip: string | undefined
}

Amplify.configure(awsExports)

export const ShipDetails = memo(() => {
  const location = useLocation()
  const {id, selectShip } = location.state as State
  const [maintenances, setMaintenances] = useState<Maintenance[]>([])

  console.log("ship detailのレンダリング")

  useEffect(() => {
    const fetchMaintenances = async() => {
      try{
        const res = (await API.graphql(
          graphqlOperation(listMaintenances),
          )) as GraphQLResult<ListMaintenancesQuery>;
        if (res.data?.listMaintenances?.items){
          const maintenancesData = res.data.listMaintenances.items as Maintenance[]
          setMaintenances(maintenancesData)
        }
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
        {maintenances.length === 0? <Box component="div" sx={{mt:1, px:1}}>整備情報はありません</Box>:<DetailList maintenances={maintenances} />}
      </Box>
    </>
  )
})