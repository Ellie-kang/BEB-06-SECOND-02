import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { Comments } from './Comments';
import { Like } from './Like';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../utils/Article.css';
import '../utils/Font.css';
import { Box, Grow } from '@mui/material';

const Article = (props) => {
  const context = useContext(AppContext);
  const {setDetailArticle} = context.action;
  const { title, content, imgFile, userId, userProfile, comments, id, like} = props;
  const date = new Date();
  const navigate = useNavigate();

  //Detail Page handling
  const handleTitleClick = (e) => {
    // header를 클릭하면, direction을 바꿔준다.

    // Article에서 img가 없으면 기본 이미지 설정.


    // textcontent 말고 , Article을 클릭했을떄 Article 정보를 가져와야함.
    // mainArticle index를 가져오면 될듯.
    // 본문 헤더, 이미지.
    

    /* setDetailArticle(e.target.textContent);
    navigate(`/detail/${e.target.textContent}`); */
    
  }

  return (
    <Grow in={true} style={{ transformOrigin: '0 2 0' }} {...(true ? { timeout: 1200 } : {})}>
      <Card
        className='contents-container'
        sx={{ borderRadius: '10px',}}
      >
        <CardHeader
          // sx={{bgcolor: "#ffd2c9"}}
          sx={{bgcolor: "#a9def9", cursor:"pointer"}}
          avatar={
            <Avatar src={userProfile} />
          }
          user={context.state.userId}
          title={title}
          onClick={handleTitleClick}
        />
        <CardMedia
          component='img'
          height='350'
          image={imgFile}
        />
        <Like articleId={id} like={like} id={id} userId={userId}/>
        <CardContent>
          <Typography component="p" sx={{color: "black"}}><strong>{userId}</strong></Typography>
          <Typography
            variant='body2' description='' 
            sx={{
              color: 'black',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical'
            }}
          >
            {content}
          </Typography>
          <Comments articleId={id} comments={comments}/>
        </CardContent>
        <Box component="footer" sx={{pl: 3}}>{`${date.getMonth()+1}월 ${date.getDate()}일`}</Box>
      </Card>
    </Grow>
  );
};

export default Article;