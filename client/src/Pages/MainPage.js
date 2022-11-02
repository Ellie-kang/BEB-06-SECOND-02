import React, {useContext} from 'react';
import "../utils/MainPage.css";
import Articles from '../components/Articles';
import { Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppContext } from '../AppContext';
import ListContainer from '../components/ListContainer';
import Grid from '@mui/material/Grid';


const MainPage = () => {
  const context = useContext(AppContext);

  return (
  <ThemeProvider theme={context.state.theme}>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={2}></Grid>
      <Grid item xs={2} justifyContent="center" mt={10} sx={{width:"100%", height:"auto"}}>
        <ListContainer />
      </Grid>
      <Grid item xs={6} mt={10} sx={{width:"100%", height:"auto"}}>
        <Articles />
        <Articles />
        <Articles />
      </Grid>
    </Grid>
  </ThemeProvider>
  )
}

export default MainPage 