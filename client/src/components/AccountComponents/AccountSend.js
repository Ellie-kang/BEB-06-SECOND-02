import React, { useState, useContext } from 'react'
import { AppContext } from '../../AppContext';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'

const AccountSend = () => {
  const context = useContext(AppContext);
  //const [img, setImg] = useState('');
  const [sendAddress, setSendAddress] = useState('')
  const [sendAmount, setSendAmount] = useState('')
  const [open, setOpen] = useState(false);

  /*   const handleChange = (e) => {
      setImg(e.target.value)
    } */

  const handleAddressChange = (e) => {
    setSendAddress(e.target.value)
  }
  const handleAmounthange = (e) => {
    setSendAmount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ sendAddress, sendAmount })
    if (sendAddress == "" || sendAmount == "") {
      alert('빈칸을 채워주세요')
    }
    else {
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
        })
    }
    // handleSubmit을 하면, 현재의 계정 address 에서 address
  }

  return (
    <div className='account-sender-container'>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className='account-sender-wrapper'>
        당신의 계정은: {context.state.address}
        <form className='account-sender-form' onSubmit={handleSubmit}>
          <div className='account-sender'>
            <div className='account-sender-label'>Address</div>
            <div className='account-sender-input'>
              <input className='sender-address' placeholder='put address' value={sendAddress} onChange={handleAddressChange} />
            </div>
          </div>
          <div className='account-sender'>
            <div className='account-sender-label'>Amount</div>
            <div className='account-sender-input'>
              <input className='sender-address' placeholder='put amount' value={sendAmount} onChange={handleAmounthange} />
              <button className='account-sender-label' type='submit'>send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default AccountSend;
