import React, {useState, useContext} from 'react';
import Media from '../components/Skeleton';
import { Grid, Box, Button } from '@mui/material';
import axios from "axios";
import { NFTStorage, File } from 'nft.storage/dist/bundle.esm.min.js'
import {AppContext} from "../AppContext"
import dotenv from "dotenv";
dotenv.config();

const NFT_STORAGE_KEY = process.env.APITOKEN


const MintPage = () => {
  const context = useContext(AppContext);
  const name = context.state.userId
  const [nftImg, setNftImg] = useState(undefined);

  const handleMint = async () => {
    try {
      //const image = new File(nftImg, "nft", {type:"image/.jpeg"});
      
      //console.log(image);
      const nftstorage = new NFTStorage({token: NFT_STORAGE_KEY});
      const description = "123123";

      const result = await nftstorage.store({
        nftImg,
        name,
        description
      })

      console.log(result)
    } catch(e) {
      console.log(e);
      return e;
    }

/*       axios.post("http://localhost:3001/web3/mint", {
        withCredentials: true
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        return e;
      }) */
  }

/*   const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setNftImg(reader.result);
        resolve();
      };
    });
  }; */

  const handleChangeImage = (e) => {
    if (!nftImg) {
      return;
    }
    if (e.target.files) {
      setNftImg(e.target.files[0]);
    }
  };

/*   async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
  } */

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Box component='img' src={nftImg} alt=""></Box>
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
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  )
}

export default MintPage