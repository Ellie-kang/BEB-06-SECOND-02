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
import '../utils/Article.css';
import '../utils/Font.css';
import img from './우주.jpeg';

const Article = (props) => {
  const context = useContext(AppContext);
  const { title, content, imgFile } = props;

  return (
    <Card
      className='contents-container'
      sx={{
        borderRadius: '10px'
      }}
    >
      <CardHeader
        avatar={
          <Avatar src={context.state.imgSrc} aria-label='recipe' />
        }
        user={context.state.userId}
        title={title}
        subheader='September 14, 2022'
      />
      <CardMedia
        component='img'
        height='194'
        image={imgFile}
      />
      <Like />
      <CardContent>
        <Typography
          sx={{ color: 'text.secondary' }}
          noWrap variant='body2' description=''
        >
          {content}
        </Typography>
        <Comments />
      </CardContent>
    </Card>
  );
};

export default Article;
