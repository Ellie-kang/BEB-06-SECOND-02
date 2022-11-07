import * as React from 'react';
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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import "../utils/WritePage.css"
import "../utils/Font.css"

export default function WritePage() {
  const context = useContext(AppContext);
  const { tokenAmount, regionList, jwt } = context.state;
  const { setTokenAmount, setRegionList } = context.action;

  const [activeStep, setActiveStep] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const { userId } = context.state; // jwt 토큰, userId
  const [writeImg, setWriteImg] = React.useState('');
  const [region, setRegion] = React.useState('');
  const [city, setCity] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const [isRegionListLoaded, loadRegionList] = React.useState(false);

  React.useEffect(() => {
    axios.get('http://localhost:3001/regions')
      .then((res) => {
        setRegionList(res.data);
        loadRegionList(true);
      }).catch((err) => {
        console.error(err);
      });
  }, [isRegionListLoaded]);

  // backdrop logic


  // region 은 넣을필요 없음. 분류할떄만. city만 post
  const steps = ['글쓰기', '미리보기', '작성 완료'];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <WriteForm
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
            setTitle={setTitle}
            setContent={setContent}
            title={title}
            content={content}
            writeImg={writeImg}
            setWriteImg={setWriteImg}
            region={region}
            setRegion={setRegion}
            regionList={regionList}
            city={city}
            setCity={setCity}
          />
        );

      case 1:
        return (
          <Review
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            title={title}
            userId={userId}
            content={content}
            writeImg={writeImg}
            setWriteImg={setWriteImg}
            region={region}
            city={city}

          />);

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

  // axios 에러가 클라이언트에서 나는거같습니다.

  const handleNext = () => {
    if (title === '' || content === '') {
      alert('빈칸을 채워주세요');
    } else {
      switch (activeStep) {
        case 0:
          setActiveStep(activeStep + 1);
          break;
        case 1:
          setOpen(!open);
          axios.post('http://localhost:3001/articles/write', {
            userId: userId,
            title: title,
            content: content,
            imgFile: writeImg,
            city: city
          }, {
            withCredentials: true
          }).then((res) => {
            setActiveStep(activeStep + 1);
            setTokenAmount(tokenAmount + 5);
            setOpen(false);
          }).catch((err) => {
            setOpen(false);
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
  const theme= createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container component='div' maxWidth='md' sx={{ mb: 4, }}>
        <Paper elevation={5} sx={{ my: { xs: 3, md: 6 }, p: { xs: 3, md: 6 }, }}>
          <Typography component='h1' variant='h4' sx={{color: 'rgba(231,127,112)', margin:0, textAlign:"center", fontWeight:"600"}}>
            게시글 작성하기
          </Typography>
          <Stepper activeStep={activeStep} sx={{ mt: 6, mb: 5, }}>
            {steps.map((label) => (
              <Step className='step-container' key={label} >
                <StepLabel className='real-label'>{label}</StepLabel>
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
