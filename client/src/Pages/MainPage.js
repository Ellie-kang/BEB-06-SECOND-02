import React, { useState, useContext } from 'react';
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


const MainPage = () => {
  const context = useContext(AppContext);

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


  const [openkorea, setOpenKorea] = useState(false);
  const [openEurope, setOpenEurope] = useState(false);
  const [openAmerica, setOpenAmerica] = useState(false);
  const [openAfrica, setOpenAfrica] = useState(false);
  const [openME, setOpenME] = useState(false);

  const handleClick1 = () => {
    setOpenKorea(!openkorea);
  };
  const handleClick2 = () => {
    setOpenEurope(!openEurope);
  };
  const handleClick3 = () => {
    setOpenAmerica(!openAmerica);
  };
  const handleClick4 = () => {
    setOpenAfrica(!openAfrica);
  };
  const handleClick5 = () => {
    setOpenME(!openME);
  };

  return (
    <ThemeProvider theme={context.state.theme}>
      <Stack className='back' sx={{mt: "100px", alignItems:"center"}}>
        <Stack direction="row" spacing={5}>
          <Stack>
              <List component="nav" className='nav-list'
              subheader={
              <ListSubheader sx={{
                bgcolor: "background.header",
                color: "black",
                borderRadius:"2px",
                }}
                component="div" id="list-subheader">WHERE IS TAKO?</ListSubheader>
              }>
                <ListItemButton onClick={handleClick1}>
                  <ListItemIcon><FlightTakeoffIcon id="flight"/></ListItemIcon>
                    <ListItemText primary="ASIA"/>
                      {openkorea ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openkorea} timeour="auto" unmountOnExit>
                  <ListContainer primary="Seoul" />
                  <ListContainer primary="Tokyo" />
                  <ListContainer primary="Beijing" />
                  <ListContainer primary="Taipei" />
                  <ListContainer primary="Bangkok" />
                  <ListContainer primary="Singapore" />
                  <ListContainer primary="Hanoi" />
                </Collapse>

                <ListItemButton onClick={handleClick2}>
                  <ListItemIcon>
                    <FlightTakeoffIcon id="flight"/>
                  </ListItemIcon>
                  <ListItemText primary="EUROPE"/>
                  {openEurope ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openEurope} timeour="auto" unmountOnExit>
                  <ListContainer primary="Paris" />
                  <ListContainer primary="Roma" />
                  <ListContainer primary="London" />
                  <ListContainer primary="Vienna" />
                  <ListContainer primary="Praha" />
                  <ListContainer primary="Budapest" />
                  <ListContainer primary="Berlin" />
                </Collapse>

                <ListItemButton onClick={handleClick3}>
                  <ListItemIcon>
                    <FlightTakeoffIcon id="flight"/>
                  </ListItemIcon>
                  <ListItemText primary="AMERICA"/>
                  {openAmerica ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openAmerica} timeour="auto" unmountOnExit>
                  <ListContainer primary="DC" />
                  <ListContainer primary="Roma" />
                  <ListContainer primary="Ottawa" />
                  <ListContainer primary="Santiago" />
                  <ListContainer primary="NewYork" />
                  <ListContainer primary="Buenos Aires" />
                  <ListContainer primary="California" />
                </Collapse>

                <ListItemButton onClick={handleClick4}>
                  <ListItemIcon>
                    <FlightTakeoffIcon id="flight"/>
                  </ListItemIcon>
                  <ListItemText primary="AFRICA"/>
                  {openAfrica ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openAfrica} timeour="auto" unmountOnExit>
                  <ListContainer primary="Ghana" />
                  <ListContainer primary="Morocco" />
                  <ListContainer primary="Egypt" />
                  <ListContainer primary="Kenya" />
                  <ListContainer primary="Nigeria" />
                </Collapse>

                <ListItemButton onClick={handleClick5}>
                  <ListItemIcon>
                    <FlightTakeoffIcon id="flight"/>
                  </ListItemIcon>
                  <ListItemText primary="MIDDLE EAST"/>
                  {openME ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openME} timeour="auto" unmountOnExit>
                  <ListContainer primary="Iran" />
                  <ListContainer primary="Riyadh" />
                  <ListContainer primary="dubai" />
                </Collapse>
              </List>
            </Stack>
          <Stack>
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