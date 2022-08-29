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
import Nav from './components/Nav';
import PrivateRoute from './pages/PrivateRoute';

function App() {
	const [mode, setMode] = useState('light');

	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<Box bgcolor={'background.default'} color={'text.primary'}>
					<Navbar setMode={setMode} mode={mode} />
					<Stack direction='row' spacing={2} justifyContent='space-between'>
						<Sidebar setMode={setMode} mode={mode} />
						<Routes>
							{/* <Route
								path='/'
								element={<Nav />}
							> */}
							<Route path='/' element={<Feed />} />
							<Route path='/settings' element={<Settings />} />
							<Route
								path='/profile'
								element={
									<PrivateRoute>
										<Profile />
									</PrivateRoute>
								}
							/>
							{/* </Route> */}
							<Route path='*' element={'404 page not found'} />
						</Routes>
						{/* <Feed /> */}
						<Rightbar />
					</Stack>
					<Add />
				</Box>
				<Footer bgcolor={'background.default'} color={'text.primary'} />
			</ThemeProvider>
		</>
	);
}

export default App;
