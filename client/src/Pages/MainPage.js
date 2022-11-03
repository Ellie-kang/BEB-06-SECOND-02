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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/articles', {
      withCredentials: true
    }).then((res) => {
      setArticles(res.data);
    }).catch((err) => {
      console.error(err);
    });
  }, []);
  console.log(articles)

  return (
    <ThemeProvider theme={context.state.theme}>
      <Grid container spacing={4} justifyContent='center'>
        <Grid item xs={2} />
        <Grid item xs={2} justifyContent='center' mt={10} sx={{ width: '100%', height: 'auto' }}>
          <ListContainer id="main-list"/>
        </Grid>
        <Grid item xs={6} mt={10} sx={{ width: '100%', height: 'auto' }}>
          {articles.map((item) => {
            return <Article key={item._id} userId={item.author.userId} title={item.title} content={item.content} imgFile={item.imgFile} />;
          })}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default MainPage;