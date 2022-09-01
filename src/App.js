import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './components/Add';
import Feed from './pages/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import PrivateRoute from './pages/PrivateRoute';

function App() {
	const [mode, setMode] = useState('light');
	const [isLoggedIn, setLogged] = useState(true);
	const setLoggedIn = () => setLogged(true);
	const setLoggedOut = () => setLogged(false);

	const darkTheme = createTheme({
		palette: {
			mode: mode,
			primary: {
				main: '#7986cb',
			},
			secondary: {
				main: '#af52d5',
			},
			primaryLight: {
				main: '#7986cb',
			},
			primaryDark: {
				main: '#26418f',
			},
			secondaryDark: {
				main: '#4a0073',
			},
		},
	});

	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<Box bgcolor={'background.default'} color={'text.primary'}>
					<Navbar
						setMode={setMode}
						mode={mode}
						isLoggedIn={isLoggedIn}
						setLoggedOut={setLoggedOut}
						setLoggedIn={setLoggedIn}
					/>
					<Stack direction='row' spacing={2} justifyContent='space-between'>
						<Sidebar setMode={setMode} mode={mode} isLoggedIn={isLoggedIn} />
						<Routes>
							<Route path='/' element={<Feed />} />
							<Route path='/settings' element={<Settings />} />
							<Route
								path='/profile'
								element={
									<PrivateRoute isLoggedIn={isLoggedIn}>
										<Profile />
									</PrivateRoute>
								}
							/>
							<Route path='*' element={'404 page not found'} />
						</Routes>
						<Rightbar />
					</Stack>
					<Add />
					<Footer />
				</Box>
			</ThemeProvider>
		</>
	);
}

export default App;
