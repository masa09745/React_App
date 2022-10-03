import React, { useContext } from 'react'
import{ Box, Typography } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import { useNavigate, Link } from "react-router-dom"


import MUIAppBar, {AppBarProps as MUIAppBarProps} from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { Drawer, List, Divider } from "@mui/material"
import { ChevronLeftOutlined, Menu } from "@mui/icons-material"

import { MenuList } from 'components/util/MenuList'
import { Footer } from 'components/layouts/Footer'

type CommonLayoutProps = {
  children: React.ReactElement
}


const drawerWidth = 240;

interface AppBarProps extends MUIAppBarProps {
  open? : boolean;
}

const AppBar = styled(MUIAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(( { theme, open }) => ({
  transition: theme.transitions.create(['margin','width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin','width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(( {theme, open }) => ({
    flexGrow:1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

export const CommonLayout = ({ children }: CommonLayoutProps) => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate()


  return (
    <>
    <Box
      sx={{
        display:'flex',
        minHeight: "100vh",

        }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            sx={{mr:2, ...(open && {display:'none' }) }}
            edge="start"
            color="inherit"
            onClick={handleDrawerOpen}
          >
            <Menu />
          </IconButton>
          <Typography component={Link} to="/" sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }} variant="h6">
            AirLine Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
           <ChevronLeftOutlined />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {MenuList}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
          {children}
        <Box
          component="footer"
          sx={{
            position: 'sticky',
            top:'100vh'
          }}
        >
          <Footer />
        </Box>
      </Main>
    </Box>
    </>
  )
}