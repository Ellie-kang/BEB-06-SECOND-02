import React, { useState, useContext } from 'react'
import { AppContext } from "../AppContext";
import { ThemeProvider } from '@mui/material/styles';
import { Stack,Button, fabClasses } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import "../utils/Comments.css"
import { Box } from '@mui/system';

export const Comments = () => {
  const context = useContext(AppContext);
  const [comment, setComment] = useState('');
  const [id, setId] = useState(1);
  const [commentLists, setCommentLists] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const post = (e) => {
    setId(id + 1);
    const newCommentLists = {
      id: id,
      content: comment,
    };
    setCommentLists([...commentLists, newCommentLists]);
    setComment('');
    setIsValid(false);
  };

  // const CommentList = () => {
  //   return (
  //     <div className='userCommentLists'>
  //       <span color="text.secondary"> {comment.id}</span>
  //       <span>{comment.content}</span>
  //     </div>
  //   )
  // }

  return (
    <ThemeProvider theme={context.state.theme}>
      <Stack>
        <Stack className='comments-text' direction="row" sx={{ marginY:"20px", color:"text.secondary" }} >
          <Box
            sx={{width: "100%"}}
            component="input"
            type="text"
            placeholder="Add a comment…"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            onKeyUp={(e) => {
              (e.target.value.length > 0) ? setIsValid(true) : setIsValid(false);
            }}
            value={comment}
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
            <Stack direction="row">
              <Typography color="text.secondary"> {comment.id}</Typography>
              <Typography>{comment.content}</Typography>
            </Stack>
          )
        })}
      </Stack>
      </ThemeProvider>
  )  
}


