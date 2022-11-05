import React, { useState, useContext,useEffect } from 'react'
import { AppContext } from "../AppContext";
import { ThemeProvider } from '@mui/material/styles';
import { Stack,Button, fabClasses, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import "../utils/Comments.css"
import { Box } from '@mui/system';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from 'axios';

export const Comments = (props) => {
  const context = useContext(AppContext);
  const { userId } = context.state;
  const [comment, setComment] = useState('');
  //const [commentLists, setCommentLists] = useState(props.comments);
  const [isValid, setIsValid] = useState(false);
  const {comments} = props;

  const [commentLists, setCommentLists] = useState([...comments]);

  const post = (e) => {
    axios.post('http://localhost:3001/articles/comment', {
      articleId : props.articleId,
      content: comment
    },{withCredentials : true})
    .then((res)=> {
      console.log(res.data)
      setComment('');
      setIsValid(false);
      window.location.replace("/")
    }).catch((err)=> {
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
            <Stack key={idx} spacing={1} className="users-comments" direction="row" sx={{marginY:"5px", color:"text.secondary" }} >
              <Avatar sx={{width: "30px", height: "30px"}} src={''} />
              <Typography component="span" sx={{textAlign:"center"}}>{comment.author[0].userId}</Typography>
              <Typography component="p">{comment.content}
                <Button onClick={(_id) => deleteComment(comment._id)}>
                  <HighlightOffIcon />
                </Button>
              </Typography>
            </Stack>
          )
        })}
      </Stack>
      </ThemeProvider>
  )  
}



