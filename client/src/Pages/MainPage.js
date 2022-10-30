import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import './MainPage.css';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

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

import img from './우주.jpeg'
import { Box, Stack } from '@mui/material';
import { positions } from '@mui/system';

const MainPage = () => {
  const [openkorea, setOpenKorea] = useState(true);
  const [openEurope, setOpenEurope] = useState(true);

  const handleClick1 = () => {
    setOpenKorea(!openkorea);
  };
  const handleClick2 = () => {
    setOpenEurope(!openEurope);
  };


  return (
    <Stack maxWidth={1000} className='back'>
          <Stack direction="row" spacing={2}>
            <Stack sx={300}>
            <List
            sx={{ width: '100%',maxWidth: 360, bgcolor: 'background.paper' }}
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
                <ListItemText primary="KOREA"/>
                {openkorea ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openkorea} timeour="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Seoul"/>
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
                    <ListItemText primary="Eastern Europe"/>
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl:4 }}>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Western Europe"/>
                  </ListItemButton>
                </List>
              </Collapse>
          </List>
          </Stack>

 
            <Stack>
          <Card sx={{ maxWidth: 600 }}>
            <CardHeader 
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  U
                </Avatar>
              }
              title="Tako"
              subheader="September 14, 2022"
            />
            <CardMedia
              component="img"
              height="194"
              image={img}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" description=''>
                왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??
                왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??
                왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??
                왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??
                왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??
                왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??왜 안돼지??? 왜지??? 왜일까??
               
                
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
          </Stack>

          {/* <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader 
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  U
                </Avatar>
              }
              title="Tako"
              subheader="September 14, 2022"
            />
            <CardMedia
              component="img"
              height="194"
              image={img}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" description=''>
                왜 안돼지??? 왜지??? 왜일까??
              </Typography> */}
            {/* </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
          </Grid> */}
          </Stack>
        </Stack>
  )
}

export default MainPage