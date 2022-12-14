import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Stack, CssBaseline } from '@mui/material';
import { indigo, amber } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Posts from './data/Posts';

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
			...indigo,
			...(mode === 'dark'
				? {
						main: '#000000',
				  }
				: { main: indigo[900] }),
		},
		secondary: {
			...amber,
			...(mode === 'dark'
				? {
						main: '#003892',
				  }
				: { main: amber[700] }),
		},
		...(mode === 'dark'
			? {
					background: {
						default: '#121212',
						paper: '#9f9f9f',
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
});

function App() {
	const lastId = Posts.sort((a, b) => {
		return a.id - b.id;
	})[Posts.length - 1].id;
	const [posts, setPosts] = useState(Posts);
	const [mode, setMode] = useState('light');
	const [isLoggedIn, setLogged] = useState(false);
	const setLoggedIn = () => setLogged(true);
	const setLoggedOut = () => setLogged(false);
	const [nextId, setNextId] = useState(lastId + 1);
	const darkTheme = createTheme(getDesignTokens(mode));

	useEffect(() => {
		const filteredPosts = Posts.filter((post) => !post.archivedAt);
		const sortedPosts = filteredPosts.slice().sort((a, b) => {
			return b.createdAt - a.createdAt;
		});
		setPosts(sortedPosts);
	}, []);
	const addPost = (post) => {
		console.log(post);
		posts.unshift(post);
		console.log(Posts);
		setNextId(nextId + 1);
		window.scrollTo(0, 0);
	};

	const deletePost = (newPost) => {
		const newPosts = posts.filter((post) => post.id !== newPost.id);
		setPosts(newPosts);
	};

	const editPost = (newPost) => {
		const newPosts = posts.filter((post) => post.id !== newPost.id);
		newPosts.unshift(newPost);
		setPosts(newPosts);
		window.scrollTo(0, 0);
	};

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
							<Route
								path='/'
								element={
									<Feed
										posts={posts}
										deletePost={deletePost}
										editPost={editPost}
										isLoggedIn={isLoggedIn}
									/>
								}
							/>
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
					{isLoggedIn && (
						<Add addPost={addPost} userName='John' avatar='J' id={nextId} />
					)}
					<Footer />
				</Box>
			</ThemeProvider>
		</>
	);
}

export default App;
