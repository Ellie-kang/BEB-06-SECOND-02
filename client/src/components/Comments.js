import React, { useState, useContext } from 'react'
import { AppContext } from "../AppContext";
import { ThemeProvider } from '@mui/material/styles';
import { Stack,Button, fabClasses } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import "../utils/Comments.css"
import { Box } from '@mui/system';

export const Comments = () => {
  const context = useContext(AppContext);
  const [comment, setComment] = useState('');
  const [commentLists, setCommentLists] = useState([]);
  const [userId, setUserId] = useState('kimhyungu') // context 로 불러와야합니다.나중엔.
  const [isValid, setIsValid] = useState(false);

  const post = (e) => {
    const newCommentLists = {
      id: userId,
      content: comment,
    };
    setCommentLists([...commentLists, newCommentLists]);
    setComment('');
    setIsValid(false);
  };

  const onEnterPost = (e) => {
    if(e.key === 'Enter')  {
      post();
    }
  }

  return (
    <ThemeProvider theme={context.state.theme}>
      <Stack>
        <Stack spacing={1} className='comments-text' direction="row" sx={{marginY:"20px", color:"text.secondary" }} >
          <Avatar className='comments-profile' sx={{width: "30px", height: "30px"}} src={context.state.imgSrc} />
          <Box
            sx={{width: "100%", bgcolor:"inherit", border:"none"}}
            component="input"
            type="text"
            placeholder="댓글 달기..."
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            onKeyUp={(e) => {
              (e.target.value.length > 0) ? setIsValid(true) : setIsValid(false);
            }}
            onKeyPress={onEnterPost}
          />
          <Button
            type="button"
            onClick={post}
            disabled={isValid ? false : true}
            >
            post
          </Button>
        </Stack>
        {commentLists.map((comment) => {
          return (
            <Stack spacing={1} className="users-comments" direction="row" sx={{marginY:"5px", color:"text.secondary" }} >
              <Avatar sx={{width: "30px", height: "30px"}} src={context.state.imgSrc} />
              <Typography component="span" sx={{textAlign:"center"}}>{userId}</Typography>
              <Typography component="p">{comment.content}</Typography>
            </Stack>
          )
        })}
      </Stack>
      </ThemeProvider>
  )  
}


