import React, {useContext} from 'react'
import { AppContext } from '../../AppContext'
import { NavLink } from 'react-router-dom';
import { Box, Chip, Stack, Typography } from '@mui/material';
import Media from '../Skeleton';
const AccountNft = () => {
  const context = useContext(AppContext);

  // context.state.nft

  return (
    <>
    <Box component="div" className='account-nft'>
      <Stack direction="row" spacing={7} mb={5} justifyContent="center" alignItems="center">
        <Typography variant="h5" 
          sx={{
            fontWeight:600,
            fontFamily:"Poppins"
        }}>NFT
        </Typography>
        <Box component="div">
          <NavLink className="write-link" to='/mint'>
            <Chip label="Mint" 
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
        <Stack direction="column" spacing={3} width="80%" ml={7}>
         <Media />
         <Media />
         <Media />
         <Media />
         <Media />
         <Media />
        </Stack>
      </Box>
    </>
  )
}

export default AccountNft