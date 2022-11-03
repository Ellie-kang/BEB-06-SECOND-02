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
import { Box } from '@mui/material';

const Article = (props) => {
  const context = useContext(AppContext);
  const { title, content, imgFile, userId } = props;
  const date = new Date();

  return (
    <Card
      className='contents-container'
      sx={{ borderRadius: '10px' }}
    >
      <CardHeader
        sx={{bgcolor: "background.header"}}
        avatar={
          <Avatar src={imgFile} aria-label='recipe' />
        }
        user={context.state.userId}
        title={title}
      />
      <CardMedia
        component='img'
        height='350'
        image={imgFile}
      />
      <Like />
      <CardContent>
        <Typography component="p" sx={{color: 'text.secondary'}}><strong>{userId}</strong></Typography>
        <Typography
          variant='body2' description='' 
          sx={{ 
            color: 'text.secondary',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical'
          }}
        >
          {content}
        </Typography>
        <Comments />
      </CardContent>
      <Box component="footer" sx={{pl: 3}}>{`${date.getMonth()+1}월 ${date.getDate()}일`}</Box>
    </Card>
  );
};

export default Article;
