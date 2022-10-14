import React, { useContext, useEffect, useState, useMemo } from'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel  from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import { useForm, Controller } from "react-hook-form"

import type { DefaultValues } from "react-hook-form"

import {useNavigate, useLocation, Link} from "react-router-dom"

import { createMaintenance } from "graphql/mutations"
import { Amplify, API, graphqlOperation } from "aws-amplify"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { UpdateMaintenanceInput } from "API"

import { Maintenance, GetMaintenanceQuery } from "API"
import { GraphQLResult } from '@aws-amplify/api';
import { getMaintenance } from "graphql/queries"


import awsconfig from 'aws-exports';
import { FormHelperText, InputLabel } from '@mui/material';

Amplify.configure(awsconfig);



type State = {
  maintenance?: Maintenance,

}


export const EditMaintenance = () => {
  const location = useLocation()
  const { maintenance } = location.state as State
  const{ user } = useAuthenticator((context) => [context.user])

  const navigate = useNavigate()

  const defaultValues: DefaultValues<Maintenance> = useMemo(() => {
    return {
      title: maintenance?.title,
      ata: maintenance?.ata,
      contents: maintenance?.contents,
      maintenanceMessage: maintenance?.maintenanceMessage,
      shipId: maintenance?.shipId,
      priority: maintenance?.priority,
      completed: maintenance?.completed,
      userName: user.username,
    };
  }, [maintenance]) 



  const {
    control,
    reset,
    formState,
    formState:{isSubmitSuccessful},
    handleSubmit,
  } = useForm<Maintenance>({defaultValues});

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
      validate: (value: string | '') => value !== '' || '入力必須です'
    }
  }

  const onSubmit = async (input: Maintenance) => {

    try{
      await API.graphql(graphqlOperation(createMaintenance, { input }))
      navigate("/ships")

      }catch(err) {
        console.log(err)
      }
  }
  console.log(defaultValues)



  useEffect (() => {
    if(formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, isSubmitSuccessful, reset])


  useEffect (() => {
    reset(defaultValues)
  }, [defaultValues])


  return(
    <>
      <Box sx={{ width: 900 }}>
        <Typography variant="h5" component="h5" sx={{mb:1}}>機材情報編集フォーム</Typography>
        <Box sx={{ width:750, mx:"auto", p:1}}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}  >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label>タイトル</label>
                <Controller
                  name="title"
                  control={control}
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
              <Grid item xs={3} hidden>
                <label>shipId</label>
                <Controller
                  name="shipId"
                  control={control}
                  render={({ field }) =>(
                    <TextField
                      fullWidth
                      {...field}
                      type="text"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={5}>
                <label>MaintenanceMessage</label>
                <Controller
                  name="maintenanceMessage"
                  control={control}
                  render={({ field }) => <TextField fullWidth {...field} />}
                />
              </Grid>
              <Grid item xs={4}>
                <label>優先度</label>
                <Controller
                  name="priority"
                  control={control}
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
              <Grid item xs={10}>
                <Controller
                  name="completed"
                  control={control}
                  defaultValue={
                    maintenance !== undefined ? maintenance.completed : false
                  }
                  render={({ field }) =>
                    <FormControlLabel
                      control={ <Checkbox {...field} checked={field.value} />}
                      label="完了"
                    />
                  }
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" >送信</Button>
          </Box>
        </Box>
      </Box>
    </>
  )

}