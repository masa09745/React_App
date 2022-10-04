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
import {useNavigate} from "react-router-dom"

import { deleteMaintenance } from "graphql/mutations"
import { Maintenance } from "API"
import { Amplify, API, graphqlOperation } from "aws-amplify"

import { ShowModal } from "components/utils/ShowModal"






type props = {
  maintenances: Maintenance[]
}


export const DetailList = (props:props) => {
  const {maintenances} = props
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
      <TableContainer component={Paper}>
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
                    <DeleteIcon onClick={()=>handleDelete(maintenance.id)} />
                  </TableCell>
                  <TableCell sx={{minWidth:350}} > {maintenance.title} </TableCell>
                  <TableCell sx={{minWidth:350, whiteSpace:'normal', wordWrap: 'break-word'}} > {maintenance.contents} </TableCell>
                  <TableCell align='center'> {maintenance.ata} </TableCell>
                  <TableCell align='center'> {maintenance.priority} </TableCell>
                  { maintenance.completed === true? <TableCell align='center'><CheckIcon /></TableCell> : <TableCell></TableCell>}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <ShowModal modalOpen={modalOpen} setModalOpen={setModalOpen} maintenance={maintenance}/>
    </>
  )
}