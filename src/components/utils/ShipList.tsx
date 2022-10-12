import { memo } from "react"

import {
  Box,
  Card,
  CardContent,
  Typography
} from "@mui/material";


import { Link } from "react-router-dom"

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';



import type { ShipData } from "Types/ship";

type props = {
  ships: ShipData[]
}

export const ShipList = memo((props:props) => {
  const {ships} = props

  return(
    <>
      <List
      sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Ship List
        </ListSubheader>
      }
      >
      {ships.map((ship) =>
          <Link to={`/ships/${ship.id}`} key={ship.id} state={{id: ship.id, selectShip: ship.registrationNumber}}>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActiveIcon />
              </ListItemIcon>
              <ListItemText primary={ship.registrationNumber} />
            </ListItemButton>
          </Link>
        )}
      </List>


    </>
)})