import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Comments } from './Comments';
import { Like } from './Like';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../utils/Articles.css'
import '../utils/Font.css'
import img from './우주.jpeg'
import Box from '@mui/material/Box';
import zIndex from '@mui/material/styles/zIndex';

const Articles = () => {
  const context = useContext(AppContext);
  const date = new Date();
  return (
    <Card className='contents-container'
    sx={{
      borderRadius: "10px",
      border: "none",
      }}>
      <CardHeader
        sx={{bgcolor: "#ffffff"}}
        avatar={
          <Avatar src={context.state.imgSrc} aria-label="recipe" />
        }
        user={context.state.userId}
        title="Tako"
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
      />
      <Like />
      <CardContent sx={{bgcolor: "background.yellow"}}>
        <Typography
          sx={{color: "text.primary"}}
         noWrap variant="body2" description=''>
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        </Typography>
        <Comments />
      </CardContent>
      <Box component="footer" sx={{bgcolor: "#ffffff", pl:3, pb: 1, pt:2}}>{`${date.getMonth()+1}월 ${date.getDate()}일`}</Box>
    </Card>
  );
};

export default Articles;
