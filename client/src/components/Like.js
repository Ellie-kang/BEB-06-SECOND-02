import React, { useState, useContext, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Stack } from '@mui/system';
import { AppContext } from "../AppContext";

export const Like = (props) => {
  const [isLike, setIsLike] = useState(false);
  const {like} = props;
  console.log(like)
  const context = useContext(AppContext);
  const { userId } = context.state;

  const isLiked = (e) => {
    axios.patch('http://localhost:3001/articles/like', {
      articleId : props.articleId,
    },{ withCredentials : true })
    .then((res) => {
      if(isLike) {
        setIsLike(false);
      } else {
        setIsLike(true);
      }
      window.location.replace("/")
    }).catch((err) => {
      console.log(err)
    })
  }
 
  // 좋아요 유무에 따라 새로고침 되도 그대로 반영 (확인 완료)
  useEffect(() => {
    const _like = like && like.filter((data) => {
      return data.userId === userId;  
    })[0]
    if(_like) {
      setIsLike(true)
    }
  })
  
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
    <Typography style={{ color: 'black' }} marginTop="8px"> 좋아요
        { like && like.length ? like.length : 0 }
    </Typography>
  </Stack>
  );
};
