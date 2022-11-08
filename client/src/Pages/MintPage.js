import React, { useState, useContext } from 'react';
import { Grid, Box, Button } from '@mui/material';
import axios from 'axios';
import { NFTStorage } from 'nft.storage/dist/bundle.esm.min.js';
import { AppContext } from '../AppContext';

const NFT_STORAGE_KEY = process.env.REACT_APP_APITOKEN;

const MintPage = () => {
  const context = useContext(AppContext);
  const {userId, address} = context.state;
  const [preview, setPreview] = useState('');
  const [nftImg, setNftImg] = useState(undefined);

  const handleMint = async () => {
    try {
      if (!nftImg) throw new Error('아직 이미지를 선택하지 않았습니다');
      if (!address) throw new Error('발급받은 web3주소가 없습니다.');
      if (!userId) throw new Error('로그인을 해주세요.');

      const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });
      const description = '123123';
      const result = await nftstorage.store({
        name: userId,
        image: nftImg,
        description
      });

      // https로 보내는 방법.
      const onlyCid = result.url.slice(7);
      const tokenURL = `https://ipfs.io/ipfs/${onlyCid}`;

      //ipfs로 보내는건 result.url을 보내주면된다.
      //image는 ipfs에 올리는데 시간이 걸리기 때문에, openSea에 뜨기까지 시간이 걸림.
      // 하지만 Opensea sdk를 사용해서 assets를 가져오면 됨.

      if (result) {
        axios.post('http://localhost:3001/web3/mint', {
          address: address,
          tokenURL: tokenURL, // or result.url
        },{
          withCredentials:true
        }).then((res) => {
          console.log(res);
        }).catch((e) => {
          console.log(e);
          return e;
        });
      }
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
    } else {
      return;
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
                },
                mr: 5
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
