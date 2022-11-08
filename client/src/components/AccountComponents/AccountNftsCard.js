import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

const AccountNftsCard = (props) => {

  return (
      <Card width="80%">
        <CardHeader
          avatar={
            (
              <Avatar
                alt="Ted talk"
                src={props.userProfileImg}
              />
            )
          }
          title={props.userId}
          sx={{color: "black"}}
          subheader='nfts'
        />
          <CardMedia
            component="img"
            height="140"
            image={props.image_preview_url}
            alt=""
          />
      </Card>
  );

};

export default AccountNftsCard;
