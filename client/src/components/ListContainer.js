import React, { useState, useContext, useEffect } from 'react';
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
import { Box } from '@mui/system';
import { AppContext } from '../AppContext';
import ListContainerByRegion from './ListContainerByRegion';
import '../utils/MainPage.css';
import '../utils/Font.css';

const ListContainer = () => {
  const context = useContext(AppContext);
  // mainPageArticles
  const { regionList } = context.state;
  const [openList, setOpenList] = useState();

  const renewOpenList = () => {
    console.log('renew');
    const entries = regionList.map((obj) => [obj.region, false]);
    setOpenList(Object.fromEntries(entries));
  };

  useEffect(renewOpenList, [regionList]);

  const ListButton = ({ handle, open, primary }) => {
    return (
      <ListItemButton onClick={handle}>
        <ListItemIcon>
          <FlightTakeoffIcon id='flight' />
        </ListItemIcon>
        <ListItemText className='list-continental' primary={primary} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    );
  };

  const ListItem = ({ region, cities, openList, setOpenList }) => {
    const open = openList[region];
    const handleOpen = () => {
      const newList = { ...openList };
      newList[region] = !open;
      console.log(newList);
      setOpenList(newList);
    };

    return (
      <>
        <ListButton handle={handleOpen} open={open} primary={region} />
        <Collapse in={open} timeout='auto'>
          {cities.map((city, idx) => <ListContainerByRegion key={idx} primary={city} />)}
        </Collapse>
      </>
    );
  };

  return (

    <Stack
      id='list-contianer' sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      <List
        component='nav'
        className='nav-list'
        subheader={
          <ListSubheader
            sx={{
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
              bgcolor: 'background.header',
              color: 'text.primary'
            }}
            component='div' id='list-subheader'
          >WHERE IS TAKO?
          </ListSubheader>
          }
      >
        {regionList.map(({ region, cities }, idx) => {
          return <ListItem key={idx} region={region} cities={cities} openList={openList} setOpenList={setOpenList} />;
        })}
      </List>
      <Box component='footer' sx={{ height: '30px', bgcolor: 'background.header' }} />
    </Stack>
  );
};

export default ListContainer;
