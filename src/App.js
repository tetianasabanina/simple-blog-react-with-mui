import React, { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
	const [mode, setMode] = useState('light');

	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<Box bgcolor={'background.default'} color={'text.primary'}>
				<Navbar setMode={setMode} mode={mode} />
				<Stack direction='row' spacing={2} justifyContent='space-between'>
					<Sidebar setMode={setMode} mode={mode} />
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
			<Footer bgcolor={'background.default'} color={'text.primary'} />
		</ThemeProvider>
	);
}

export default App;
