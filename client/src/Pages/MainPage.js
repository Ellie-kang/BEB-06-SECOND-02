import React, { useContext, useEffect} from 'react';
import '../utils/MainPage.css';
import Article from '../components/Article';
import { ThemeProvider } from '@mui/material/styles';
import { AppContext } from '../AppContext';
import ListContainer from '../components/ListContainer';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Paper, Typography } from '@mui/material';

const MainPage = () => {
  const context = useContext(AppContext);
    //mainPageArticles
    const { mainArticles, regionList } = context.state;
    const { setMainArticles, setRegionList } = context.action;

  useEffect(() => {
    axios.get('http://localhost:3001/articles', {
      withCredentials: true
    }).then((res) => {
      console.log(res.data);
      setMainArticles(res.data);
    }).catch((err) => {
      console.error(err);
    });

    axios.get('http://localhost:3001/regions')
      .then((res) => {
        setRegionList(res.data);
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
          {[...mainArticles].reverse().map((item) => {
            return <Article id={item._id} userId={item.author.userId} title={item.title} content={item.content} imgFile={item.imgFile} userProfile={item.author.profileImage} comments={item.comments} />;
          })}
        </Grid>
        <Grid item xs={12}>
          <Paper square elevation={0} sx={{height:"25px"}} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default MainPage;

