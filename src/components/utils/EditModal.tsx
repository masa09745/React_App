import React, { useState, useContext, useEffect, memo } from'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel  from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';


import { useForm, Controller } from "react-hook-form"

import type { DefaultValues } from "react-hook-form"

import {useNavigate} from "react-router-dom"

import { UpdateMaintenanceInput } from "API"
import { updateMaintenance } from "graphql/mutations"

import { Amplify, API, graphqlOperation } from "aws-amplify"




type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  maintenance?: UpdateMaintenanceInput
}



export const EditModal = memo((props:Props) => {
  const {open, setOpen, maintenance} = props
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  console.log(maintenance?.id)
  const handleClose = () =>{
    reset()
    setOpen(false)
  }

  console.log('Modalのレンダリング')

  const {
    control,
    reset,
    formState,
    formState:{isSubmitSuccessful},
    handleSubmit,
  } = useForm<UpdateMaintenanceInput>();

  const validationRoles = {
    title: {
      required: "入力必須です"
    },
    description: {
      required: "入力必須です"
    },
    ATA: {
      required: "入力必須です"
    },
    priority: {
      validate: (value: string |undefined| '') => value !== '' || '入力必須です'
    }
  }

  useEffect (() => {
    if(formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, isSubmitSuccessful, reset])

  const handleUpdate = async (id?: string, data?: UpdateMaintenanceInput) => {
    try {
      const input = {id, data}
      await API.graphql(graphqlOperation(updateMaintenance,{ input }))
      console.log('update Success')
      navigate("/ships")
    }catch(err) {
      console.log(err)
    }
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component="form" id="modal-modal-description" >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label>タイトル</label>
                <Controller
                  name="title"
                  control={control}
                  defaultValue={maintenance?.title}
                  rules={validationRoles.title}
                  render={({ field, fieldState }) =>(
                    <TextField
                     {...field}
                     fullWidth
                     type="text"
                     helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <label>ATA</label>
                <Controller
                  name="ata"
                  control={control}
                  defaultValue={maintenance?.ata}
                  rules={validationRoles.ATA}
                  render={({ field, fieldState}) =>(
                    <TextField
                      fullWidth
                      {...field}
                      type="text"
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={5}>
                <label>MaintenanceMessage</label>
                <Controller
                  name="maintenanceMessage"
                  control={control}
                  defaultValue={maintenance?.maintenanceMessage}
                  render={({ field }) => <TextField fullWidth {...field} />}
                />
              </Grid>
              <Grid item xs={4}>
                <label>優先度</label>
                <Controller
                  name="priority"
                  control={control}
                  defaultValue={maintenance?.priority}
                  render={({ field, fieldState }) => (
                  <TextField select fullWidth {...field} type="number" helperText={fieldState.error?.message} >
                      <MenuItem value={""}></MenuItem>
                      <MenuItem value={"高"}>高</MenuItem>
                      <MenuItem value={"中"}>中</MenuItem>
                      <MenuItem value={"低"}>低</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <label>内容</label>
                <Controller
                  name="contents"
                  control={control}
                  defaultValue={maintenance?.contents}
                  rules={validationRoles.description}
                  render={({ field, fieldState }) =>(
                    <TextField
                      {...field}
                      multiline
                      minRows={5}
                      maxRows={10}
                      fullWidth
                      type="text"
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="completed"
                  control={control}
                  defaultValue={ maintenance?.completed }
                  render={({ field }) =>
                    <FormControlLabel
                      control={ <Checkbox {...field}  />}
                      label="完了"
                    />
                  }
                />
              </Grid>
            </Grid>
            <Button type="submit" onClick={()=>handleUpdate(maintenance?.id, maintenance)}>更新</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
})