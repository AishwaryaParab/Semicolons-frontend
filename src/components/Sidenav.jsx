import {React, useEffect, useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
// import "./styles.css";
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Dashboard from "./Dashboard";
import Message from "./Message";
import Logout from "./Logout";
import Job from "./CreateJob";
import People from "./People";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import { AccountCircleOutlined } from '@mui/icons-material';

import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../images/logo.png";
import AllJobs from './AllJobs';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuItem, setMenuItem] = useState("");

  const cookies = new Cookies();


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href.split("/");
    if(url[url.length - 1] === "") {
      setMenuItem("dashboard");
    }
    else {
      setMenuItem(url[url.length - 1]);
    }
  }, [])

  const handleLogout = () => {
    cookies.remove("token");
    cookies.remove("user");
    navigate("/login");
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{backgroundColor: "#342E39"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <img className='logo' src={logo} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => {setMenuItem("dashboard"); navigate("/dashboard")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: menuItem === "dashboard" ? "#F5AE45" : "#FFFFFF",
                  borderRadius: "12px",
                  margin: "10px",
                  '&:hover': {
                    backgroundColor: menuItem === "dashboard" ? "#F5AE45" : "#EEEEEE"
                  },
                }}

              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: menuItem === "dashboard" ? "#FFFFFF" : "#808191"
                  }}
                >
                  <DashboardRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ 
                  opacity: open ? 1 : 0, 
                  color: menuItem === "dashboard" ? "#FFFFFF" : "#808191"
                  }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => {setMenuItem("jobs"); navigate("/jobs")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: menuItem === "jobs" ? "#F5AE45" : "#FFFFFF",
                  borderRadius: "12px",
                  margin: "10px",
                  '&:hover': {
                    backgroundColor: menuItem === "jobs" ? "#F5AE45" : "#EEEEEE"
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: menuItem === "jobs" ? "#FFFFFF" : "#808191"
                  }}
                >
                  <WorkRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Job Description" sx={{ opacity: open ? 1 : 0, color: menuItem === "jobs" ? "#FFFFFF" : "#808191" }} />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => {setMenuItem("people"); navigate("/people")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: menuItem === "people" ? "#F5AE45" : "#FFFFFF",
                  borderRadius: "12px",
                  margin: "10px",
                  '&:hover': {
                    backgroundColor: menuItem === "people" ? "#F5AE45" : "#EEEEEE"
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: menuItem === "people" ? "#FFFFFF" : "#808191"
                  }}
                >
                  <PeopleRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="People" sx={{ opacity: open ? 1 : 0, color: menuItem === "people" ? "#FFFFFF" : "#808191" }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => {setMenuItem("add-employee"); navigate("/add-employee")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: menuItem === "add-employee" ? "#F5AE45" : "#FFFFFF",
                  borderRadius: "12px",
                  margin: "10px",
                  '&:hover': {
                    backgroundColor: menuItem === "add-employee" ? "#F5AE45" : "#EEEEEE"
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: menuItem === "add-employee" ? "#FFFFFF" : "#808191"
                  }}
                >
                  <AccountCircleOutlined />
                </ListItemIcon>
                <ListItemText primary="Add Employee" sx={{ 
                  opacity: open ? 1 : 0, 
                  color: menuItem === "add-employee" ? "#FFFFFF" : "#808191",
                   }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => {handleLogout()}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: menuItem === "logout" ? "#F5AE45" : "#FFFFFF",
                  borderRadius: "12px",
                  margin: "10px",
                  '&:hover': {
                    backgroundColor: menuItem === "logout" ? "#F5AE45" : "#EEEEEE"
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: menuItem === "logout" ? "#FFFFFF" : "#808191"
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0, color: menuItem === "logout" ? "#FFFFFF" : "#808191" }} />
              </ListItemButton>
            </ListItem>
            
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {menuItem == "dashboard" && <Dashboard />}
          {menuItem == "job" && <AllJobs />}
          {menuItem == "people" && <People />}
          {menuItem == "message" && <Message />}
          {menuItem == "logout" && <Logout />}
      </Box> */}
    </Box>
  );
}