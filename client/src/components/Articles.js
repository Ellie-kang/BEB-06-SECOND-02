import React, { useContext } from 'react'
import { AppContext } from "../AppContext";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import img from './우주.jpeg'
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Box, Stack, Input } from '@mui/material';
import { Comments } from './Comments';

const Articles = () => {
  const context = useContext(AppContext);
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader 
        avatar={
          <Avatar src={context.state.imgSrc} aria-label="recipe" />
        }
        user={context.state.userId}
        title="Tako"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography noWrap className={ClassNames.heading} sx={{ maxHeight:'200px'}} variant="body2" color="text.secondary" description=''>
          <Link
            component="button"
            color="neutral"
            fontWeight="lg"
            textColor="text.primary"
          >
            {/* {context.state.userId}*/}
            tako
          </Link>{' '}
          가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하
          가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하
          가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하
          가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하가나다라마차카타파하
        </Typography>
        <Link
        component="button"
        underline="none"
        fontSize="sm"
        startDecorator="…"
        sx={{ color: 'text.tertiary' }}
        >
          더 보기
        </Link> 
        <Comments />
      </CardContent>
    </Card>

  )
}

export default Articles;