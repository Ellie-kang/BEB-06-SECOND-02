import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material'
import axios from 'axios';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MainPage = () => {
  const [mynfts, setNft] = useState([{}]);

    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        const url =
          "https://testnets-api.opensea.io/api/v1/assets?order_by=sale_count&order_direction=desc&offset=0&limit=50&include_orders=false";
        const info = await axios
          .get(url)
          .then((res) => {
            setNft(res.data.assets.filter((item) => item.image_url !== null));
            console.log(res.data.assets);
          })
          .catch((e) => console.error(e));
      };
      console.log(mynfts);

  return (
 
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {/* {mynfts ? (
                 df   
                ) : null} */}
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader 
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  U
                </Avatar>
              }
              title="Tako"
              subheader="September 14, 2022"
            />
            <CardMedia
              component="img"
              height="194"
              image={mynfts.image_preview_url}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" description={mynfts.description}/>
            </CardContent>
            <CardActions disableSpacing>

            </CardActions>

          </Card>

        </Grid>
        <Grid item xs={6}>

        </Grid>
      </Grid>
    </Box>


  )
}

export default MainPage