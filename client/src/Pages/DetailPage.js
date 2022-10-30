import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'

const theme = createTheme();

const DetailPage = () => {

  let navigate = useNavigate();

  const information = [
    { name: '이름', detail: 'blablabla' },
    { name: '작성일자', detail: '2020.03.12' }
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            한일 여객선 재개에 부산 시장 기대감
          </Typography>
          <React.Fragment>
            <React.Fragment>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    한일 바닷길도 열렸다. 정부가 10월28일부터 한일 국제여객선 승선을 허용했다. 일본 항만의 준비가 완료되지 않아 정상화까지는 다소 시간이 소요될 전망이지만, 일본시장의 여객선 비중이 높았던 부산 여행업계는 기대감을 드러냈다.
                    <br></br>
                    해양수산부는 10월28일부터 코로나19로 중단됐던 한일 국제여객선 운항을 정상화했다. 2020년 3월부터 지속된 여객선 승선 금지 조치가 해제되며 부산항, 동해항과 일본 후쿠오카, 오사카, 시모노세키, 쓰시마, 마이즈루를 연결하는 국제여객 항로가 재개된다. 해양수산부 조승환 장관은 “이번 한·일 여객운송 재개가 코로나19로 인해 어려움을 겪은 여객선사들과 지역경제에 활력을 불어 줄 것으로 기대한다”라며 “국제여객선 안전과 방역에 각별히 유의하여 한·일 국제여객선 운항 재개에 만전을 기하겠다”고 말했다.
                    <br></br>
                    일본 항만의 준비가 완료되지 않아 정상화에는 시간이 더 소요될 전망이다. 코로나 여파로 지난 2년 7개월간 닫혀 있었던 만큼 현재 일본 항만 CIQ 시설·운영이 완전히 정비되지 않은 상태다. 지역·항만별 정상화 시기도 상이할 것으로 보인다. 팬스타크루즈 관계자는 "11월1일부터 오사카 여객선을 재개할 계획이며 처음에는 테스트 형태로 운영하다 점차 정기적으로 운항할 계획"이라며 "일본 현지 사정으로 쓰시마 노선은 운영 재개까지 시간이 걸릴 것 같다"고 말했다. 업계에서는 12월은 돼야 운항이 본격화될 것이라는 예측도 많다.
                    <br></br>

                  </Typography>
                </Grid>
                <Grid item container direction="column" xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
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
                <Button variant="contained" onClick={() => { navigate(-1) }} sx={{ mt: 3, ml: 1 }}>
                  뒤로 가기
                </Button>
              </Box>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default DetailPage