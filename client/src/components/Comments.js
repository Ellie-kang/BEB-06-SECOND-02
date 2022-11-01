import React, { useContext, useState } from 'react'
import { AppContext } from "../AppContext";

import { Link } from 'react-router-dom';
import { Box, Stack, Input, Button } from '@mui/material';

export const Comments = () => {
  const [commentInput, setCommentInput] = useState('');
  const [contentComments, setContentComments] = useState([]);

  const context = useContext(AppContext);

  const hadleInput = (e) => {
    setCommentInput(e.target.value);
  }

  const handleSubmit = (e) => {
    const newComments = [...contentComments];
    newComments.push(commentInput);
    setContentComments(newComments);
    setContentComments('');
  }

  return(
    <div>
       <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment…"
          sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
          onChange={hadleInput}
          value={commentInput}
        />
        <Button onClick={handleSubmit}>
          Post
        </Button>

    </div>
  )
}
