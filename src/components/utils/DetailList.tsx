import React, { useContext, useState } from 'react';

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
  Paper,
} from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import {useNavigate, Link} from "react-router-dom"

import { deleteMaintenance } from "graphql/mutations"
import { Maintenance } from "API"
import { Amplify, API, graphqlOperation } from "aws-amplify"
import { useAuthenticator } from "@aws-amplify/ui-react"


import { EditModal } from "components/utils/EditModal"
import { ShowModal } from "components/utils/ShowModal"






type props = {
  maintenances: Maintenance[]
}


export const DetailList = (props:props) => {
  const {maintenances} = props
  const { user } = useAuthenticator((context) => [context.user])
  const [open, setOpen] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [maintenance, setMaintenance] = useState<Maintenance>()
  const navigate = useNavigate()

  const handleShow =(data: Maintenance) =>{
    setMaintenance(data)
    setModalOpen(true)
  }

  const handleDelete = async (id:string) => {
    const input = { id }
    await API.graphql(graphqlOperation(deleteMaintenance,{input}))
      navigate('/ships')
  }

  return(
    <>
      <TableContainer component={Paper} sx={{mt:5}} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >Action</TableCell>
              <TableCell >Title</TableCell>
              <TableCell >Contents</TableCell>
              <TableCell align='center'>ATA</TableCell>
              <TableCell align='center'>Priority</TableCell>
              <TableCell align='center'>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {maintenances.map((maintenance) =>{
              return(
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={maintenance.id} >
                  <TableCell sx={{minWidth:150}}>
                    <VisibilityIcon sx={{mr:1}} onClick={()=>handleShow(maintenance)} />
                    {user.username === maintenance.userName ? <Link to={`${maintenance.id}/edit`} state={{maintenance:maintenance}}><EditIcon sx={{mr:1}}/></Link> : <></> }
                    {user.username === maintenance.userName ? <DeleteIcon onClick={()=>handleDelete(maintenance.id)} /> : <></> }
                  </TableCell>
                  <TableCell sx={{minWidth:200}} > {maintenance.title} </TableCell>
                  <TableCell sx={{minWidth:300, whiteSpace:'normal', wordWrap: 'break-word'}} > {maintenance.contents} </TableCell>
                  <TableCell align='center'> {maintenance.ata} </TableCell>
                  <TableCell align='center'> {maintenance.priority} </TableCell>
                  { maintenance.completed === true? <TableCell align='center'><CheckIcon /></TableCell> : <TableCell></TableCell>}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <EditModal open={open} setOpen={setOpen} maintenance={maintenance}/>
      <ShowModal modalOpen={modalOpen} setModalOpen={setModalOpen} maintenance={maintenance}/>
    </>
  )
}