import React from 'react';
import { NavLink } from 'react-router-dom';
import Article from '../Article';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { chipStyle } from '../../StyledSx';

const AccountArticles = (props) => {
  const { userArticles } = props;

  return (
    <Box className='account-contents' component='div'>
      <Stack direction='row' mb={2} justifyContent='center' alignItems='center'>
        <Typography
          variant='h5'
          ml='1em'
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            fontFamily: 'Poppins'
          }}
        >Comments
        </Typography>
        <Box component='div'>
          <NavLink className='write-link' to='/write'>
            <Chip
              label='Write'
              sx={chipStyle}
            />
          </NavLink>
        </Box>
      </Stack>
      <Stack direction='column' spacing={2} justifyContent='center'>
        {[...userArticles].reverse().map((item) => {
          return (
            <Article
              key={item._id}
              like={item.like}
              id={item._id}
              userId={item.author.userId}
              title={item.title}
              content={item.content}
              imgFile={item.imgFile}
              userProfile={item.author.profileImage}
              comments={item.comments}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default AccountArticles
;
