import React, { useContext, useState, useEffect } from 'react';
import '../utils/MainPage.css';
import Articles from '../components/Articles';
import { Slide, Stack, Grow, Box, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppContext } from '../AppContext';
import ListContainer from '../components/ListContainer';
import Grid from '@mui/material/Grid';
import { display } from '@mui/system';

const MainPage = () => {
  const context = useContext(AppContext);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <ThemeProvider theme={context.state.theme}>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={2}></Grid>
      <Grid item xs={2} justifyContent="center" sx={{width:"100%", height:"auto", }}>
        <ListContainer/>
      </Grid>

      <Grow in={true} style={{ transformOrigin: '0 2 0' }} {...(true ? { timeout: 1200 } : {})}>
        <Grid item xs={6} mt={10} sx={{width:"100%", height:"auto"}}>
          {/*List 에 따른 Articles를 불러오기. */}
          <Articles />
          <Articles />
          <Articles />
        </Grid>
      </Grow>
    </Grid>
    
  </ThemeProvider>
  )
}

export default MainPage;
