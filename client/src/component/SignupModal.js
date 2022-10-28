import React from 'react';
import '../utils/modal.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const SignupModal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    const theme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('id'),
            password: data.get('password'),
            confirm_password: data.get('confirm_password')
        });
    };
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <ThemeProvider theme={theme}>
                            <Container component="main" maxWidth="xs">
                                <CssBaseline />
                                <Box
                                    sx={{
                                        marginTop: 8,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign up
                                    </Typography>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    autoComplete="id"
                                                    name="id"
                                                    required
                                                    fullWidth
                                                    id="id"
                                                    label="ID"
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="password"
                                                    label="Password"
                                                    type="password"
                                                    name="password"
                                                    autoComplete="password"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="confirm_password"
                                                    label="Confirm Password"
                                                    type="password"
                                                    id="confirm_password"
                                                    autoComplete="new-password"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Sign Up
                                        </Button>
                                    </Box>
                                </Box>
                            </Container>
                        </ThemeProvider>
                    </main>
                    <footer>
                        <button className="close" onClick={close}>
                            close
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default SignupModal;

