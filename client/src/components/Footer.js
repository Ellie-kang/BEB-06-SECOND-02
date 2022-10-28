import React, {useContext} from "react";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { AppContext } from "../AppContext";

const Footer = () => {
  const context = useContext(AppContext);

	function handle1Click(e) {
		window.location.href = "https://github.com/Ellie-kang/BEB-06-SECOND-02.git"
	}
	function handle2Click(e) {
		window.location.href = "https://github.com/EthanKIMHG/BEB-06-SECOND-02"
	}
	function handle3Click(e) {
		window.location.href = "https://github.com/HCW-code/BEB-06-SECOND-02.git"
	}
	function handle4Click(e) {
		window.location.href = "https://github.com/Heein-Park/BEB-06-SECOND-02.git"
	}

	return (
		<div>
			<ThemeProvider theme={context.state.theme}>
				<AppBar position="static" elevation={0} component="footer" >
					<Toolbar style={{ justifyContent: "end" }}>
						<Box p={1} mx={2} my={3}>
							<Stack spacing={2}>
								<Stack direction="row" spacing={2} style={{ justifyContent: "center" }}>
									<GitHubIcon fontSize="large" onClick={handle1Click} />
									<GitHubIcon fontSize="large" onClick={handle2Click} />
									<GitHubIcon fontSize="large" onClick={handle3Click} />
									<GitHubIcon fontSize="large" onClick={handle4Click} />
								</Stack>
								<Typography variant="subtitle1" align="center">
									⚒️ 강영아  김현구  홍찬우  박희인 ⚒️
								</Typography>
								<Typography variant="overline" align="end">
									2022@codeStates BEB6th Takoyaki
								</Typography>
							</Stack>
						</Box>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</div>
	)
}

export default Footer;