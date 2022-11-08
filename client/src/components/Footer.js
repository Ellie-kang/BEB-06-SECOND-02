import React, { useContext } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import { Box, Typography, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppContext } from '../AppContext';

const Footer = () => {
  const context = useContext(AppContext);

  function handle1Click (e) {
    window.location.href = 'https://github.com/Ellie-kang/BEB-06-SECOND-02.git';
  }
  function handle2Click (e) {
    window.location.href = 'https://github.com/EthanKIMHG/BEB-06-SECOND-02';
  }
  function handle3Click (e) {
    window.location.href = 'https://github.com/HCW-code/BEB-06-SECOND-02.git';
  }
  function handle4Click (e) {
    window.location.href = 'https://github.com/Heein-Park/BEB-06-SECOND-02.git';
  }

  return (
    <div>
      <ThemeProvider theme={context.state.theme}>
        <Paper square elevation={0} sx={{ height: '25px', mt: 1 }} />
        <AppBar position='static' elevation={0} component='footer' sx={{ bgcolor: 'background.footer' }}>
          <Toolbar style={{ justifyContent: 'end' }}>
            <Box p={1} mx={2} my={3} mr={3}>
              <Stack spacing={2}>
                <Stack direction='row' spacing={2} style={{ justifyContent: 'center' }}>
                  <GitHubIcon fontSize='large' onClick={handle1Click} />
                  <GitHubIcon fontSize='large' onClick={handle2Click} />
                  <GitHubIcon fontSize='large' onClick={handle3Click} />
                  <GitHubIcon fontSize='large' onClick={handle4Click} />
                </Stack>
                <Typography variant='subtitle1'>
                 <span role="img" aria-label="s">⚒️</span> 강영아  김현구  홍찬우  박희인 <span role="img" aria-label="s">⚒️</span>
                </Typography>
                <Typography variant='overline'>
                  2022@codeStates BEB6th 타코야끼
                </Typography>
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Footer;
