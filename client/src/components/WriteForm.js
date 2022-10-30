import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function WriteForm(props) {
    const handleChange_title = (e) => {
        props.setTitle(e.target.value)
    }
    const handleChange_content = (e) => {
        props.setContent(e.target.value)
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                게시글 작성
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="title"
                        label="제목 작성"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                        value={props.title}
                        onChange={handleChange_title}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="내용 작성"
                        multiline
                        rows={10}
                        fullWidth
                        placeholder='내용을 입력하세요'
                        value={props.content}
                        onChange={handleChange_content}
                    />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    onClick={props.handleNext}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {props.activeStep != 0 ? 'Place order' : 'Next'}

                </Button>
            </Box>
        </React.Fragment>
    );
}