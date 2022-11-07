import React, { useContext, useEffect } from 'react';
import '../utils/MainPage.css';
import Article from '../components/Article';
import { ThemeProvider } from '@mui/material/styles';
import { AppContext } from '../AppContext';
import ListContainer from '../components/ListContainer';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Paper } from '@mui/material';

const MainPage = () => {
  const context = useContext(AppContext);
  // mainPageArticles
  const { mainArticles } = context.state;
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
  // Grid 수정.

  return (
    <ThemeProvider theme={context.state.theme}>
      <Grid container spacing={4} justifyContent='center'>
        <Grid item sm={0} md={2} />
        <Grid
          item xs={12} sm={2} justifyContent='center' sx={{
            width: '100%',
            ml: {
              xs: 3
            },
            pr: {
              xs: 3
            },
            mr: {
              sm: 10,
              md: 5,
              lg: 0
            },
            mt: {
              xs: 0,
              sm: 10
            },
            height: 'auto'
          }}
        >
          <ListContainer id='main-list' />
        </Grid>
        <Grid
          item xs={12} sm={6} sx={{
            width: '100%',
            height: 'auto',
            mt: {
              xs: 0,
              sm: 10
            }
          }}
        >
          {[...mainArticles].reverse().map((item) => {
            return (
              <Article
                key={item._id}
                id={item._id}
                userId={item.author.userId}
                title={item.title}
                content={item.content}
                imgFile={item.imgFile}
                userProfile={item.author.profileImage}
                comments={item.comments}
                like={item.like}
              />
            );
          })}
        </Grid>

        <Grid item xs={12}>
          <Paper square elevation={0} sx={{ height: '25px' }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default MainPage;
