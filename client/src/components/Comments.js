import React, { useState } from 'react'
import { AppContext } from "../AppContext";

import { Stack,Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export const Comments = () => {
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

    <Stack >
      <Stack direction="row" sx={{ marginY:"20px" }} >
        <TextField 
          type="text"
          placeholder="Add a comment…"
          style = {{width: '100%', color: 'black'}}
          // inputProps={ariaLabel}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          onKeyUp={(e) => {
            e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
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
      
  
    
  )  
}


