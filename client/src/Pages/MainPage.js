import React, { useContext, useEffect, useState } from 'react';
import '../utils/MainPage.css';
import Article from '../components/Article';
import { ThemeProvider } from '@mui/material/styles';
import { AppContext } from '../AppContext';
import ListContainer from '../components/ListContainer';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const MainPage = () => {
  const context = useContext(AppContext);
    //mainPageArticles
  const {mainArticles} = context.state;
  const {setMainArticles} = context.action;

  useEffect(() => {
    axios.get('http://localhost:3001/articles', {
      withCredentials: true
    }).then((res) => {
      setMainArticles(res.data);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <ThemeProvider theme={context.state.theme}>
      <Grid container spacing={4} justifyContent='center'>
        <Grid item xs={2} />
        <Grid item xs={2} justifyContent='center' mt={10} sx={{ width: '100%', height: 'auto' }}>
          <ListContainer id="main-list"/>
        </Grid>
        <Grid item xs={6} mt={10} sx={{ width: '100%', height: 'auto' }}>
          {mainArticles.map((item) => {
            return <Article key={item._id} userId={item.author.userId} title={item.title} content={item.content} imgFile={item.imgFile} />;
          })}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default MainPage;