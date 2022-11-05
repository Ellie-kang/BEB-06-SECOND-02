import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import axios from 'axios';
import { Stack } from '@mui/system';

export const Like = (props) => {
  const [isLike, setIsLike] = useState(false);

  const {like, articleId} = props;

  const isLiked = (e) => {
    axios.patch('http://localhost:3001/articles/like', {
      articleId : props.articleId
    },{ withCredentials : true })
    .then((res) => {
      console.log(res.data)
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
          onClick={() => {
            setIsLike(false);
            isLiked(false)
          }}
        >
          <FavoriteIcon />
        </IconButton>
        )
      : (
        <IconButton
          aria-label='add to favorites'
          onClick={() => {
            setIsLike(true);
            isLiked(true)
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
        )}
    <Typography style={{ color: 'black'}} marginTop="8px"> 좋아요
        {/* <span onClick={() => {
          setCount(count + 1);
        }}
        /> */}
        {like.length}
    </Typography>
  </Stack>
  );
};
