import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Chip, TextField } from '@mui/material';

export default function Review (props) {
  const date = new Date();
  const dateString = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? 'PM' : 'AM'}`;
  const {city, region} = props;

  const information = [
    { name: '이름', detail: props.userId },
    { name: '작성일자', detail: dateString }
  ];

  return (
    <>
      <Typography variant='h6' gutterBottom>
        {props.title}
      </Typography>
      <Grid container spacing={2} sx={{ width: '100%', height: 'auto' }}>
        <Grid item xs={12}>
          <Typography sx={{ width: '100%', height: 'auto' }} component='img' src={props.writeImg} alt='' />
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            {props.content}
          </Typography>
        </Grid>
        <Grid item xs={3} row>
          {region ? <Chip label={region} sx={{mr: 2,bgcolor:"#a9def9", color: "white", fontWeight:600}}/> : null}
          {city ? <Chip label={city} sx={{mr: 2, bgcolor:"#a9def9", color: "white", fontWeight:600}}/> : null}
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item container direction='column' xs={12}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            작성자
          </Typography>
          <Grid container>
            {information.map((el) => (
              <React.Fragment key={el.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{el.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{el.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={props.handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button
          variant='contained'
          onClick={props.handleNext}
          sx={{ mt: 3, ml: 1 }}
        >
          {props.activeStep === 1 ? 'Complete' : 'Next'}
        </Button>
      </Box>
    </>
  );
}
