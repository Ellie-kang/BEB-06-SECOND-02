import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const information = [
	{ name: '이름', detail: 'blablabla' },
	{ name: '작성일자', detail: '2020.03.12' },
];

export default function Review(props) {
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				{props.title}
			</Typography>
			<Grid container spacing={2} sx={{width: "100%", height: "auto"}}>
				<Grid item xs={12}>
				  <Typography sx={{width:"100%", height:"auto"}} component="img" src={props.writeImg} alt=""/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
						{props.content}
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
				<Button onClick={props.handleBack} sx={{ mt: 3, ml: 1 }}>
					Back
				</Button>
				<Button
					variant="contained"
					onClick={props.handleNext}
					sx={{ mt: 3, ml: 1 }}
				>
					{props.activeStep == 1 ? 'Complete' : 'Next'}
				</Button>
			</Box>
		</React.Fragment>
	);
}