import React, { useState, useContext, useCallback } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import "../utils/MainPage.css";
import "../utils/Font.css";
import {AppContext} from '../AppContext';
import axios from 'axios';


const ListContainerByRegion = ({primary}) => {
  const context = useContext(AppContext);

  const {mainArticles} = context.state;
  const {setMainArticles} = context.action;

  const handleButtonClick = useCallback((e) => {
    axios.get(`http://localhost:3001/regions?${e.target.innerText}`)
    .then((res) => {
      console.log(res.data)
    })
  })

  return (
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl:4 }} onClick={handleButtonClick}>
        <ListItemIcon>
          <FlagCircleIcon id="flag"/>
        </ListItemIcon>
        <ListItemText className='list-region' primary={primary}/>
      </ListItemButton>
    </List>

  );
};

export default ListContainerByRegion;
