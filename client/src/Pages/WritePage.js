import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WriteForm from '../components/WriteForm';
import Review from '../components/Review';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../AppContext';

const theme = createTheme();

export default function WritePage () {
  const context = useContext(AppContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const { userId } = context.state; // jwt 토큰, userId
  const [writeImg, setWriteImg] = React.useState('');

  const steps = ['글쓰기', '미리보기', '작성 완료'];

  function getStepContent (step) {
    switch (step) {
      case 0:
        return <WriteForm activeStep={activeStep} steps={steps} handleNext={handleNext} setTitle={setTitle} setContent={setContent} title={title} content={content} writeImg={writeImg} setWriteImg={setWriteImg} />;
      case 1:
        return <Review activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} title={title} userId={userId} content={content} writeImg={writeImg} setWriteImg={setWriteImg} />;
      case 2:
        return (
          <>
            <Typography variant='h5' gutterBottom>
              게시글 작성이 완료되었습니다.
            </Typography>
            <Link to='/'>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant='contained' sx={{ mt: 3, ml: 1 }}>
                  HOME
                </Button>
              </Box>
            </Link>
          </>
        );
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    if (title === '' || content === '') {
      alert('빈칸을 채워주세요');
    } else {
      switch (activeStep) {
        case 0 :
          setActiveStep(activeStep + 1);
          break;
        case 1 :
          axios.post('http://localhost:3001/articles/write', {
            userId: userId,
            title: title,
            content: content,
            imgFile: writeImg
          }, {
            withCredentials: true
          }).then((res) => {
            setActiveStep(activeStep + 1);
          }).catch((err) => {
            alert('게시글 작성 중 문제가 발생했습니다.');
            console.error(err);
          });
          break;
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component='main' maxWidth='md' sx={{ mb: 4 }}>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component='h1' variant='h4' align='center'>
            게시글 작성하기
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {getStepContent(activeStep)}
          </>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
