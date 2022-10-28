import React from "react";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import { Box, Typography } from "@mui/material";

function Footer() {

    return (
        <div>
            <AppBar position="static" elevation={0} component="footer" color="default">
                <Toolbar style={{ justifyContent: "end" }}>
                    <Box p={3} mx={2} my={3}>
                        <Stack spacing={2}>
                            <Stack direction="row" spacing={2} style={{ justifyContent: "end" }}>
                                <GitHubIcon fontSize="large"/>
                                <GitHubIcon fontSize="large"/>
                                <GitHubIcon fontSize="large"/>
                                <GitHubIcon fontSize="large"/>
                            </Stack>
                            <Typography variant="subtitle1" gutterBottom>
                                Developers  강영아  김현구  홍찬우  박희인
                            </Typography>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer;