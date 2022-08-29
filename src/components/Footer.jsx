import { Box, Toolbar, Typography, styled, AppBar } from '@mui/material';
import React from 'react';

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	// backgroundColor: 'background.default',
	// color: 'text.primary',
}));
const Footer = () => {
	return (
		<Box>
			<AppBar color='primary' sx={{ top: 'auto', bottom: 0 }} position='float'>
				<StyledToolBar>
					<Typography variant='h5'>Contacts</Typography>
					<Typography variant='h5'>About</Typography>
				</StyledToolBar>
			</AppBar>
		</Box>
	);
};

export default Footer;
