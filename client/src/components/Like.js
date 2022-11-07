import React, { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Stack } from '@mui/system';
import { AppContext } from "../AppContext";


export const Like = (props) => {
  const [isLike, setIsLike] = useState(false);
  const [color, setColor] = useState('unLike')

  const {like} = props;

  const context = useContext(AppContext);
  const { userId } = context.state;
  console.log(userId)
  console.log(like)


  const isLiked = (e) => {
    axios.patch('http://localhost:3001/articles/like', {
      articleId : props.articleId,
    },{withCredentials : true})
    .then((res) => {
      if(isLike) {
        setIsLike(false);
        setColor('unLike')
      } else {
        setIsLike(true);
        setColor('like')
      }
      console.log(res)
      // window.location.replace("/")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <Stack direction="row"> 
    {isLike 
      ? (
        <IconButton
          aria-label='add to favorites'
          style={{ color: 'red' }}
          onClick={isLiked}
        >
          <FavoriteIcon />
        </IconButton>
        )
      : (
        <IconButton
          aria-label='delete to favorites'
          onClick={isLiked}
        >
          <FavoriteBorderIcon />
        </IconButton>
        )}
    <Typography style={{ color: 'black'}} marginTop="8px"> 좋아요
        {like.length}
    </Typography>
  </Stack>
  );
};
