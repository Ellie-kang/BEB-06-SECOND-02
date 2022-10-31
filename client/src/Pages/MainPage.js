import React, { useState } from 'react';
import './MainPage.css';
import Usercontents from '../components/Usercontents';

import { Stack } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

const MainPage = () => {
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
    <Stack maxWidth={950} className='back'>
      <Stack direction="row" spacing={5}>
        <Stack>
          <List
            sx={{ width:300, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              TRAVEL                             
            </ListSubheader>
          }>
          <ListItemButton onClick={handleClick1}>
            <ListItemIcon>
              <FlightTakeoffIcon />
            </ListItemIcon>
              <ListItemText primary="ASIA"/>
                {openkorea ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openkorea} timeour="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Seoul"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tokyo"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Beijing"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Taipei"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bangkok"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Singapore"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hanoi"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Phnum Penh"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manila"/>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClick2}>
                <ListItemIcon>
                  <FlightTakeoffIcon />
                </ListItemIcon>
                <ListItemText primary="EUROPE"/>
                {openEurope ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openEurope} timeour="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Paris"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Roma"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="London"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vienna"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Praha"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Budapest"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bern"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Amsterdam"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Berlin"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Madrid"/>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClick3}>
                <ListItemIcon>
                  <FlightTakeoffIcon />
                </ListItemIcon>
                <ListItemText primary="AMERICA"/>
                {openAmerica ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openAmerica} timeour="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Washington DC"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ottawa"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mexico City"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Brasilia"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Buenos Aires"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Santiago"/>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClick4}>
                <ListItemIcon>
                  <FlightTakeoffIcon />
                </ListItemIcon>
                <ListItemText primary="AFRICA"/>
                {openAfrica ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openAfrica} timeour="auto" unmountOnExit>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ghana"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Morocco"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Egypt"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tanzania"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Kenya"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Nigeria"/>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClick5}>
                <ListItemIcon>
                  <FlightTakeoffIcon />
                </ListItemIcon>
                <ListItemText primary="MIDDLE EAST"/>
                {openME ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openME} timeour="auto" unmountOnExit>
              <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Iran"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Israel"/>
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Iraq"/>
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Stack>
        <Stack>
          <Usercontents />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MainPage