import React, { useState, useContext } from 'react';
import { AppContext } from '../../AppContext';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { Box, Stack, Chip, Button, TextField } from '@mui/material';
import alert from 'alert';
import Typography from '@mui/material/Typography';

const AccountSend = () => {
  const context = useContext(AppContext);
  // const [img, setImg] = useState('');
  const [sendAddress, setSendAddress] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [open, setOpen] = useState(false);

  const handleAddressChange = (e) => {
    setSendAddress(e.target.value);
  };
  const handleAmounthange = (e) => {
    setSendAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ sendAddress, sendAmount });
    if (sendAddress === '' || sendAmount === '') {
      alert('빈칸을 채워주세요');
    } else {
      setOpen(!open);
      axios.post('http://localhost:3001/web3/userSend', {
        recipient: sendAddress,
        amount: sendAmount
      }, {
        withCredentials: true
      })
        .then((res) => {
          setOpen(false);
          console.log(res);
        }).catch((err) => {
          setOpen(false);
          console.log(err);
        });
    }
    // handleSubmit을 하면, 현재의 계정 address 에서 address
  };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <Stack className='account-sender-wrapper' direction='column' spacing={3} sx={{ fontFamily: 'Poppins' }}>
        <Stack>
          <Typography variant='h6' gutterBottom>Your Account:</Typography>
          <Typography variant='subtitle1' sx={{ overflowWrap: 'anywhere' }}>{context.state.address ? context.state.address : '로그인을 해주세요'}</Typography>
        </Stack>
        <Stack component='form' className='account-sender-form' onSubmit={handleSubmit}>
          <TextField sx={{ marginBottom: '1em' }} placeholder='put address' label='Address' variant='standard' value={sendAddress} onChange={handleAddressChange} />
          <TextField sx={{ marginBottom: '1em' }} placeholder='put amount' label='Amount' variant='standard' value={sendAmount} onChange={handleAmounthange} />
          <Button className='account-sender-button' type='submit'>
            <Chip
              sx={{
                width: 1,
                bgcolor: 'rgba(231,127,112)',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '14px'
              }}
              className='account-sender-chip'
              label='send'
            />
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default AccountSend;
