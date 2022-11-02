import React, { useState, useContext, useEffect } from 'react';
import "../utils/MainPage.css";
import Articles from '../components/Articles';
import { Stack } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from '@mui/material/styles';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import { AppContext } from '../AppContext';
import axios from "axios";


const MainPage = () => {
  const context = useContext(AppContext);
  const [openAsia, setOpenAsia] = useState(false);
  const [openEurope, setOpenEurope] = useState(false);
  const [openAmerica, setOpenAmerica] = useState(false);
  const [openAfrica, setOpenAfrica] = useState(false);
  const [openME, setOpenME] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.innerText);
    
  }

  const handleAsiaClick = () => {
    setOpenAsia(!openAsia);
  };
  const handleEuropeClick = () => {
    setOpenEurope(!openEurope);
  };
  const handleAmericaClick = () => {
    setOpenAmerica(!openAmerica);
  };
  const handleAfricaClick = () => {
    setOpenAfrica(!openAfrica);
  };
  const handleMeClick = () => {
    setOpenME(!openME);
  };

  const ListContainer = ({primary}) => {
    return (
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:4 }}>
            <ListItemIcon>
              <FlagCircleIcon id="flag"/>
            </ListItemIcon>
            <ListItemText primary={primary}/>
          </ListItemButton>
        </List>
    )
  }

  const ListButton = ({handle, open, primary}) => {
    return (
      <ListItemButton onClick={handle}>
        <ListItemIcon>
          <FlightTakeoffIcon id="flight"/>
        </ListItemIcon>
        <ListItemText primary={primary}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    )
  }

  // box stack ㅇ

  return (
  <ThemeProvider theme={context.state.theme}>
    <Stack className='back' sx={{mt: "100px", alignItems:"center",}}>
      <Stack direction="row" spacing={5}>
        <Stack sx={{
          width:"200px",
        }}>
          <List component="nav" className='nav-list'
          subheader={
          <ListSubheader sx={{
            bgcolor: "background.header",
            color: "text.primary",
            borderRadius:"2px",
            }}
            component="div" id="list-subheader">WHERE IS TAKO?</ListSubheader>
          }>
            <ListButton sx={{
              
            }} handle={handleAsiaClick} open={openAsia} primary="Asia"/>
            <Collapse in={openAsia} timeout="auto">
              <ListContainer primary="Seoul" />
              <ListContainer primary="Tokyo" />
              <ListContainer primary="BangKok" />
            </Collapse>

            <ListButton handle={handleEuropeClick} open={openEurope} primary="Europe"/>
            <Collapse in={openEurope} timeout="auto">
              <ListContainer primary="Paris" />
              <ListContainer primary="Roma" />
              <ListContainer primary="London" />
            </Collapse>

            <ListButton handle={handleAmericaClick} open={openAmerica} primary="America"/>
            <Collapse in={openAmerica} timeour="auto" unmountOnExit>
              <ListContainer primary="DC" />
              <ListContainer primary="Ottawa" />
              <ListContainer primary="NewYork" />
            </Collapse>

            <ListButton handle={handleAfricaClick} open={openAfrica} primary="Africa"/>
            <Collapse in={openAfrica} timeour="auto" unmountOnExit>
              <ListContainer primary="Morocco" />
              <ListContainer primary="Egypt" />
            </Collapse>

            <ListButton handle={handleClick} open={openME} primary="Middle East"/>
            <Collapse in={openME} timeour="auto" unmountOnExit>
              <ListContainer primary="Iran" />
              <ListContainer primary="Riyadh" />
              <ListContainer primary="dubai" />
            </Collapse>
          </List>
        </Stack>
        <Stack sx={{
          
        }}>
          <Articles />
          <Articles />
          <Articles />
        </Stack>
      </Stack>
    </Stack>
  </ThemeProvider>
  )
}

export default MainPage