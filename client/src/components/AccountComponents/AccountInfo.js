import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import PersonIcon from '@mui/icons-material/Person';
import TokenIcon from '@mui/icons-material/Token';
import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';

const AccountInfo = () => {
  const context = useContext(AppContext);
  const { userId, tokenAmount } = context.state;
  const { deleteCookie } = context.action;

  const _deleteCookie = () => {
    deleteCookie('token');
    window.location.replace('/');
    alert('logout');
  };

  return (
    <>
      <button type='button' onClick={_deleteCookie}> logout</button>
      <Box className='account-info' mt={8} ml={10} sx={{ fontFamily: 'Poppins' }}>
        <Stack direction='row' spacing={3} ml={4} p={1} mt={13} className='user-id' alignContent='center'>
          <PersonIcon className='account-icon' sx={{ fontSize: '35px' }} />
          <Typography className='account-user-span' component='span' sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: 600 }}>{userId}</Typography>
        </Stack>
        <Stack direction='row' spacing={3} ml={4} p={1} mb={1} className='user-id'>
          <TokenIcon className='account-icon' sx={{ fontSize: '35px' }} />
          <Typography className='account-user-span' component='span' sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: 600 }}>
            {(tokenAmount || 0)} TAKO
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default AccountInfo
;
