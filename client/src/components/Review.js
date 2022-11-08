import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';

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
      <Typography variant='h6' gutterBottom sx={{fontFamily:"Poppins", display:"flex", alignItems: "center"}}>
        <Typography component="p" variant='h5' sx={{mr: 1, fontWeight:600,}}>제목: </Typography>
        {props.title}
      </Typography>
      <Grid container spacing={2} sx={{ width: '100%', height: 'auto', fontFamily:"Poppins"}}>
        <Grid item xs={12}>
          <Typography sx={{ maxHeight:"400px", width: '100%', height: 'auto'}} component='img' src={props.writeImg} alt='' />
        </Grid>
        <Grid item xs={8}>
          <Typography variant='h7' gutterBottom sx={{ mt: 2, display: "flex", alignItems:"center", }}>
          <Typography component="p" variant='h7' sx={{mr: 1, fontWeight:600, display:"box"}}>본문: </Typography>
            {props.content}
          </Typography>
        </Grid>
        
        <Grid item xs={4} sx={{display: "flex", alignItems:"center"}}>
          <Typography variant='h7' sx={{mr: 1, fontWeight:600}}>지역: </Typography>
          {region ? <Chip label={region} sx={{mr: 1,bgcolor:"#a9def9", color: "white", fontWeight:600}}/> : null}
          {city ? <Chip label={city} sx={{mr: 1, bgcolor:"#a9def9", color: "white", fontWeight:600}}/> : null}
        </Grid>
        <Grid item container direction='column' xs={12}>
          <Typography variant='h6' gutterBottom sx={{ mt: 10, mb:5, }}>
            작성자
          </Typography>
          <Grid container>
            {information.map((el) => (
              <React.Fragment key={el.name}>
                <Grid item xs={6} mb={2}>
                  <Typography gutterBottom sx={{fontWeight:600}}>{el.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom sx={{fontWeight:600}}>{el.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' onClick={props.handleBack}
          sx={{
            mt: 3,
            ml: 1,
            color: "white",
            bgcolor: '#a9def9',
            '&.MuiButtonBase-root:hover': {
              bgcolor: '#a9def9'
            }
          }}>
          Back
        </Button>
        <Button
          variant='contained'
          onClick={props.handleNext}
          sx={{
            mt: 3,
            ml: 1,
            color: "white",
            bgcolor: '#a9def9',
            '&.MuiButtonBase-root:hover': {
              bgcolor: '#a9def9'
            }
          }}
        >
          {props.activeStep === 1 ? 'Complete' : 'Next'}
        </Button>
      </Box>
    </>
  );
}
