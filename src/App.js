import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Stack, CssBaseline } from '@mui/material';
import { orange, teal } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Add from './components/Add';
import Feed from './pages/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import PrivateRoute from './pages/PrivateRoute';
import ScrollToTop from './HOC/ScrollToTop';

const getDesignTokens = (mode) => ({
	// console.log(mode)
	palette: {
		mode,
		primary: {
			...orange,
			...(mode === 'dark' && {
				main: '#000000',
			}),
		},
		secondary: {
			...teal,
			...(mode === 'dark'
				? {
						main: '#003892',
				  }
				: { main: teal[500] }),
		},
		...(mode === 'dark'
			? {
					background: {
						default: '#121212',
						paper: '#121212',
					},
			  }
			: {
					background: {
						default: '#f0f2f4',
						paper: '#cbcbcb',
					},
			  }),
		text: {
			...(mode === 'light'
				? {
						primary: '#000000',
						secondary: '#00000',
				  }
				: {
						primary: '#fff',
						secondary: '#fafafa',
				  }),
		},
	},
	// palette: {
	// 	mode,
	// 	...(mode === 'light'
	// 		? {
	// 				// palette values for light mode
	// 				primary: orange[500],
	// 				divider: orange[200],
	// 				text: {
	// 					primary: '#000000',
	// 					secondary: '#fafafa',
	// 				},
	// 				background: {
	// 					default: '#f0f2f4',
	// 					paper: '#cbcbcb',
	// 				},
	// 		  }
	// 		: {
	// 				// palette values for dark mode
	// 				primary: '#000000',
	// 				divider: 'rgba(255, 255, 255, 0.12)',
	// 				background: {
	// 					default: '#121212',
	// 					paper: '#121212',
	// 				},
	// 				text: {
	// 					primary: '#fff',
	// 					secondary: '#fafafa',
	// 				},
	// 		  }),
	// },
});

function App() {
	const [mode, setMode] = useState('light');
	const [isLoggedIn, setLogged] = useState(true);
	const setLoggedIn = () => setLogged(true);
	const setLoggedOut = () => setLogged(false);

	const darkTheme = createTheme(getDesignTokens(mode));

	// const darkTheme = createTheme({
	// 	palette: {
	// 		mode: mode,
	// 		primary: {
	// 			main: '#7986cb',
	// 		},
	// 		secondary: {
	// 			main: '#af52d5',
	// 		},
	// 		primaryLight: {
	// 			main: '#7986cb',
	// 		},
	// 		primaryDark: {
	// 			main: '#26418f',
	// 		},
	// 		secondaryDark: {
	// 			main: '#4a0073',
	// 		},
	// 		background: {
	// 			default: '#f0f2f4',
	// 		},
	// 	},
	// });

	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline enableColorScheme />
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
						<ScrollToTop />
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
