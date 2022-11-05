import React, {useState, useContext} from 'react'
import { AppContext } from '../../AppContext';
import axios from 'axios'
import { Box, Stack, Typography, Chip } from '@mui/material';

const AccountSend = () => {
  const context = useContext(AppContext);
    //const [img, setImg] = useState('');
  const [sendAddress, setSendAddress] = useState('')
  const [sendAmount, setSendAmount] = useState('')
  
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
    console.log({sendAddress, sendAmount})
    if(sendAddress == "" || sendAmount == ""){
      alert('빈칸을 채워주세요')
    }
    else{
      axios.post('http://localhost:3001/web3/userSend', {
        recipient: sendAddress,
        amount: sendAmount
        }, {
          withCredentials: true
        })
        .then((res)=> {
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
    }
    // handleSubmit을 하면, 현재의 계정 address 에서 address
  }

  return (
    <>
    <Box className='account-sender' mt={-20} mb={3} ml={10}>
      <Stack className='account-sender-wrapper' direction="column" spacing={3} ml={5} sx={{fontSize:"20px", fontFamily:"Poppins", fontWeight:500}}>
          <span>
          <p>Your Account:</p>
          {context.state.address ? context.state.address : "로그인을 해주세요"}
          </span>
          <Box component="form" className='account-sender-form' onSubmit={handleSubmit}>
            <Stack direction="row" spacing={2}>
              <span>Address</span>
              <div className='account-sender-input'>
                <input className='sender-address' placeholder='put address' value={sendAddress} onChange={handleAddressChange} />
              </div>
            </Stack>
            <Stack direction="row" spacing={2}>
              <span>Amount</span>
              <div className='account-sender-input'>
                <input className='sender-address' placeholder='put amount' value={sendAmount} onChange={handleAmounthange} />
              </div>
              <button className='account-sender-button' type='submit'>
                <Chip 
                  sx={{
                    bgcolor:"rgba(231,127,112)",
                    color:"white",
                    fontWeight:600,
                    cursor:"pointer",
                    fontSize: "14px"
                  }}
                  className='account-sender-chip'
                  label="send" />
              </button>
            </Stack>
          </Box>
      </Stack>

    </Box>
    </>
    
  )
};

export default AccountSend;
