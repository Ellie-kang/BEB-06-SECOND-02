import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import PersonIcon from '@mui/icons-material/Person';
import TokenIcon from '@mui/icons-material/Token';
import { Box, Stack } from '@mui/system';
import { Typography, Button, Chip } from '@mui/material';
import alert from 'alert';

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
    <Stack
      className='account-info' sx={{
        width: 1,
        fontFamily: 'Poppins'
      }}
    >
      <Stack direction='row' spacing={3} className='user-id' alignContent='center'>
        <PersonIcon className='account-icon' sx={{ fontSize: '35px' }} />
        <Typography className='account-user-span' component='span' sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: 600 }}>{userId}</Typography>
      </Stack>
      <Stack direction='row' spacing={3} className='user-id'>
        <TokenIcon className='account-icon' sx={{ fontSize: '35px' }} />
        <Typography className='account-user-span' component='span' sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: 600 }}>
          {(tokenAmount || 0)} TAKO
        </Typography>
      </Stack>
      {/* 로그아웃 버튼 */}
      <Button
        type='button'
        onClick={_deleteCookie}
        sx={{
          width: 1,
          '&.MuiButtonBase-root:hover': {
            bgcolor: 'transparent'
          }
        }}
      >
        <Chip
          label='로그아웃'
          sx={{
            width: 1,
            fontWeight: 600,
            color: 'white',
            fontSize: '16px',
            fontFamily: 'Poppins',
            bgcolor: 'rgba(231,127,112)'
          }}
        />
      </Button>
    </Stack>
  );
};

export default AccountInfo
;
