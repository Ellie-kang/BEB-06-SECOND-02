import React, { useState, useContext,useEffect } from 'react'
import { AppContext } from "../AppContext";
import { ThemeProvider } from '@mui/material/styles';
import { Stack,Button, fabClasses, Chip, Grid, IconButton, makeStyles } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import "../utils/Comments.css"
import { Box } from '@mui/system';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from 'axios';

export const Comments = (props) => {
  const context = useContext(AppContext);
  const { userId } = context.state;
  const [comment, setComment] = useState('');
  const [open, setOpen] = useState(false);
  //const [commentLists, setCommentLists] = useState(props.comments);
  const [isValid, setIsValid] = useState(false);
  const {comments} = props;
  const [commentLists, setCommentLists] = useState([...comments]);
  
  const post = (e) => {
    setOpen(!open);
    axios.post('http://localhost:3001/articles/comment', {
      articleId : props.articleId,
      content: comment
    },{withCredentials : true})
    .then((res)=> {
      console.log(res.data)
      setOpen(false);
      setComment('');
      setIsValid(false);
      window.location.replace("/")
    }).catch((err)=> {
      setOpen(false);
      console.log(err)
    })
  };

  const onEnterPost = (e) => {
    if(e.key === 'Enter')  {
      post();
    }
  }

  const deleteComment = async (targetId) => {
    await axios.delete(`http://localhost:3001/articles/comment/${targetId}`
    , { withCredentials: true }).then((res)=> {
      console.log(res)
      const deleteList = commentLists.filter((comment) => comment._id !== targetId);
      setCommentLists(deleteList);
    }).catch((err)=> {
      console.log(err)
    })
  }
  return (
    <ThemeProvider theme={context.state.theme}>
      <Stack>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <Stack spacing={1} className='comments-text' direction="row" sx={{marginY:"20px", color:"text.secondary" }} >
          <Avatar className='comments-profile' sx={{width: "30px", height: "30px"}} src={context.state.userProfileImg} />
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
        {commentLists.map((comment, idx) => {
          return (
            <Stack key={idx} spacing={1} className="users-comments"  direction="row" sx={{marginY:"5px", color:"text.secondary"}}  >
                <Avatar sx={{ width: "30px", height: "30px" }} src={''} />
                <Typography component="span" sx={{ textAlign:"center" }}>{comment.author[0].userId}</Typography>
                <Typography component="p" sx={{ width:1000 }}>{comment.content}</Typography>
                <IconButton component="button" onClick={(_id) => deleteComment(comment._id)} >
                    <HighlightOffIcon color="action"/>
                </IconButton>
              </Stack>
          )
        })}
      </Stack>
    </ThemeProvider>
  )  
}



