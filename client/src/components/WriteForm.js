import React, { useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Chip } from '@mui/material';


export default function WriteForm (props) {
  const { region, setRegion, city, setCity, regionList, cityList, setCityList } = props;

  const citiesByRegion = Object.fromEntries(regionList.map(item => [item.region, item.cities]));
  const regions = regionList.map(item => item.region);

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

  const handleRegionChange = useCallback((e) => {
    const target = e.target.value;
    setRegion(target);
    if (region) {
      setCity('');
    }
    setCityList(citiesByRegion[target]);
  }, [regionList]
  );

  const handleCityChange = useCallback(
    (e) => {
      if (!region) {
        alert('지역을 먼저 선택해주세요.');
        return;
      }
      setCity(e.target.value);
    }, [region]
  );

  return (
    <>
      <Typography
        variant='h5' mb={4} gutterBottom
        sx={{ fontFamily: 'Poppins', color: 'rgba(231,127,112)', fontWeight: 600 }}
      >
        게시글 작성
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
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
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>지역</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={region}
              label='region'
              onChange={handleRegionChange}
            >
              {regions.map((item, idx) => (
                <MenuItem sx={{ pl: 2 }} key={idx} value={item}>
                  <Chip label={item} sx={{ bgcolor: '#a9def9', color: 'white', fontWeight: 600 }} />
                </MenuItem>)
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>도시</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={city}
              label='city'
              onChange={handleCityChange}
            >
              {cityList.map((item, idx) => (
                <MenuItem key={idx} value={item}>
                  <Chip label={item} sx={{ bgcolor: '#a9def9', color: 'white', fontWeight: 600 }} />
                </MenuItem>))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ maxHeight: '500px', width: '100%', height: 'auto' }} component='img' src={props.writeImg} alt='' />
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
          sx={{
            mt: 3,
            ml: 1,
            bgcolor: '#a9def9',
            '&.MuiButtonBase-root:hover': {
              bgcolor: '#a9def9'
            }
          }}
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
          sx={{
            mt: 3,
            ml: 1,
            bgcolor: '#a9def9',
            '&.MuiButtonBase-root:hover': {
              bgcolor: '#a9def9'
            }
          }}
        >
          {props.activeStep !== 0 ? 'Place order' : 'Next'}
        </Button>
      </Box>
    </>
  );
}
