import React, { useContext } from 'react';
import '../utils/MainPage.css';
import Articles from '../components/Articles';
import { Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppContext } from '../AppContext';
import ListContainer from '../components/ListContainer';

const MainPage = () => {
  const context = useContext(AppContext);

  return (
    <ThemeProvider theme={context.state.theme}>
      <Stack className='back' sx={{ mt: '100px', alignItems: 'center' }}>
        <Stack direction='row' spacing={5}>
          <ListContainer />
          <Stack sx={{

          }}
          >
            <Articles />
            <Articles />
            <Articles />
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default MainPage;
