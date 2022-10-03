import { useState, useEffect } from 'react'

import {Amplify, API, graphqlOperation } from "aws-amplify"
import { listMaintenances } from 'graphql/queries'
import awsExports from "aws-exports"

Amplify.configure(awsExports)



export const Home = () => {
  const [maintenances, setMaintenances] = useState([])

  const fetchMaintenances = async() => {
    try{
      const maintenanceData: any = await API.graphql(graphqlOperation(listMaintenances))
      const maintenances = maintenanceData.data.listMaintenances.items
      setMaintenances(maintenances)
    }catch(err){
      console.log("error")
    }
  }

  useEffect(()=> {
    fetchMaintenances();
  },[])
  console.log(maintenances)
  return(
    <>
      Homeページ
    </>
  )
}