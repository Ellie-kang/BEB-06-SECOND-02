import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function WriteForm (props) {
  const handleChangeTitle = (e) => {
    props.setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    props.setContent(e.target.value);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        props.setWriteImg(reader.result);
        resolve();
      };
    });
  };
  const handleChangeImage = (e) => {
    if (e.target.files) {
      encodeFileToBase64(e.target.files[0]);
    }
  };

  return (
    <>
      <Typography variant='h6' gutterBottom>
        게시글 작성
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id='title'
            label='제목 작성'
            fullWidth
            autoComplete='cc-name'
            variant='standard'
            value={props.title}
            onChange={handleChangeTitle}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ width: '100%', height: 'auto' }} component='img' src={props.writeImg} alt='' />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='outlined-multiline-static'
            label='내용 작성'
            multiline
            rows={10}
            fullWidth
            placeholder='내용을 입력하세요'
            value={props.content}
            onChange={handleChangeContent}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='contained'
          component='label'
          sx={{ mt: 3, ml: 1 }}
        >
          Upload File
          <input
            type='file'
            hidden
            onChange={handleChangeImage}
          />
        </Button>
        <Button
          variant='contained'
          onClick={props.handleNext}
          sx={{ mt: 3, ml: 1 }}
        >
          {props.activeStep !== 0 ? 'Place order' : 'Next'}
        </Button>
      </Box>
    </>
  );
}
