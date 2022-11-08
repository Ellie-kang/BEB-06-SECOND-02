import React from 'react'
import { NavLink } from 'react-router-dom';
import Article from '../Article';
import { Box, Chip, Stack, Typography } from '@mui/material';


const AccountArticles = (props) => {

  const {userArticles} = props;

  return (
    <Box className='account-contents' component="div" ml={2}>
      <Stack direction="row" spacing={7} mb={5} justifyContent="center" alignItems="center">
        <Typography variant="h5"
          sx={{
            fontWeight:600,
            fontFamily:"Poppins"
        }}>Comments
        </Typography>
        <Box component="div">
          <NavLink className="write-link" to='/write'>
            <Chip label="Write"
              sx={{
                textDecorationLine: "none",
                fontWeight:500,
                color: "white",
                fontSize: "16px",
                fontFamily:"Poppins",
                bgcolor:'rgba(231,127,112)',
                cursor:"pointer"}}/>
          </NavLink>
        </Box>
      </Stack>
      <Stack direction="column" spacing={2} mr={4} justifyContent="center">
        {[...userArticles].reverse().map((item) => {
            return (
              <Article
                key={item._id}
                id={item._id}
                userId={item.author.userId}
                title={item.title}
                content={item.content}
                imgFile={item.imgFile}
                userProfile={item.author.profileImage}
                comments={item.comments}
                />)
          })}
      </Stack>
    </Box>
  )
}

export default AccountArticles