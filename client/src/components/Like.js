import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

export const Like = () => {
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <div>
      {isLike ? 
        (<IconButton  
            aria-label="add to favorites" 
            style={{ color:'red'}} 
            onClick={() =>{
              setIsLike(false) 
        }}>
          <FavoriteIcon />
          <Typography style={{ color:'black'}}> 좋아요 
            <span onclick= {() => {
              setCount(count + 1)
            }}>
            </span>{count}
          </Typography>
        </IconButton>) :
        (<IconButton 
            aria-label="add to favorites" 
            onClick={() => {
              setIsLike(true)
        }}>
          <FavoriteBorderIcon />
        </IconButton>)
      }
    </div>
  )
}
