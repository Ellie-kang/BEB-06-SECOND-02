import React, { useState, useContext } from 'react';
import Media from '../components/Skeleton';
import { Grid, Box, Button } from '@mui/material';
import axios from 'axios';
import { NFTStorage, File } from 'nft.storage/dist/bundle.esm.min.js';
import { AppContext } from '../AppContext';

const NFT_STORAGE_KEY = process.env.REACT_APP_APITOKEN;

const MintPage = () => {
  const context = useContext(AppContext);
  const name = context.state.userId;
  const [preview, setPreview] = useState('');
  const [nftImg, setNftImg] = useState(undefined);

  const handleMint = async () => {
    try {
      if (!nftImg) throw new Error('아직 이미지를 선택하지 않았습니다');

      const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });
      const description = '123123';

      const result = await nftstorage.store({
        image: nftImg,
        name,
        description
      });

      console.log(result);
    } catch (e) {
      console.error(e);
      alert(e);
    }
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setPreview(reader.result);
        resolve();
      };
    });
  };

  const handleChangeImage = (e) => {
    if (e.target.files) {
      encodeFileToBase64(e.target.files[0]);
      setNftImg(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} />
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Box component='img' src={preview} alt='' />
          <Box>
            <Button
              variant='contained'
              component='label'
              sx={{
                bgcolor: '#a9def9',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: '#a9def9'
                }
              }}
            >
              Select Img
              <input
                type='file'
                hidden
                onChange={handleChangeImage}
              />
            </Button>
            <Button
              variant='contained'
              component='label'
              onClick={handleMint}
              sx={{
                bgcolor: '#a9def9',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: '#a9def9'
                }
              }}
            >
              Mint!
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </>
  );
};

export default MintPage
;
