import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MaterialUISwitch from './MaterialUiSwitch';
import { FlutterDash } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

import {
	AppBar,
	InputBase,
	styled,
	Toolbar,
	Typography,
	Badge,
	Avatar,
	Box,
	Menu,
	MenuItem,
	IconButton,
	Button,
	FormControl,
	Select,
} from '@mui/material';

const StyledToolBar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	alignItems: 'center',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
	'label + &': {
		marginTop: theme.spacing(3),
	},
	'& .MuiInputBase-input': {
		// borderRadius: 4,
		position: 'relative',
		// backgroundColor: theme.palette.background.paper,
		color: 'white',
		// border: '1px solid #ced4da',
		fontSize: 16,
		padding: '6px 26px 8px 6px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
	'.MuiSelect-icon': {
		color: 'white',
	},
}));

const Navbar = ({ mode, setMode, isLoggedIn, setLoggedOut, setLoggedIn }) => {
	const [openUserMenu, setOpenUserMenu] = useState(false);
	const [openMainMenu, setOpenMainMenu] = useState(false);
	const [languageSelected, setLanguage] = useState('en');
	const logout = () => {
		setLoggedOut();
		setOpenUserMenu(false);
	};

	const handleLanguageChange = (event) => {
		setLanguage(event.target.value);
	};

	return (
		<AppBar position='sticky'>
			<StyledToolBar>
				<Typography variant='h6' sx={{ display: { xs: 'none', md: 'block' } }}>
					My Blog
				</Typography>
				<FlutterDash sx={{ display: { xs: 'block', md: 'none' } }} />
				<IconButton
					onClick={(e) => setOpenMainMenu(true)}
					size='large'
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id='main-menu'
					aria-labelledby='main-menu'
					open={openMainMenu}
					onClose={(e) => setOpenMainMenu(false)}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
				>
					<MenuItem component={Link} to={'/'}>
						Home
					</MenuItem>
					<MenuItem component={Link} to={'/settings'}>
						Settings
					</MenuItem>
					{isLoggedIn && (
						<MenuItem component={Link} to={'/profile'}>
							Profile
						</MenuItem>
					)}
					<MenuItem sx={{ paddingLeft: '8px' }}>
						{/* <ListItemIcon>
								{mode === 'dark' ? (
									<Brightness7 fontSize='small' />
								) : (
									<Brightness4 fontSize='small' />
								)}
							</ListItemIcon>
							<Switch
								onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
							/> */}
						<MaterialUISwitch
							color='secondary'
							onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
						/>
					</MenuItem>
				</Menu>
				{/* <Outlet /> */}
				<Search>
					<InputBase placeholder='search...' />
				</Search>

				<FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
					<Select
						labelId='language-select-label'
						id='language-select'
						value={languageSelected}
						// label='Language'
						displayEmpty
						onChange={handleLanguageChange}
						autoWidth
						input={<StyledInput />}
					>
						<MenuItem value={'en'}>En</MenuItem>
						<MenuItem value={'fi'}>Fi</MenuItem>
					</Select>
				</FormControl>
				{isLoggedIn ? (
					<>
						<Icons>
							<Badge badgeContent={4} color='error'>
								<MailIcon />
							</Badge>
							<Badge badgeContent={2} color='error'>
								<NotificationsIcon />
							</Badge>
							<Avatar
								sx={{ width: 30, height: 30 }}
								src=''
								onClick={(e) => setOpenUserMenu(true)}
							/>
						</Icons>
						<UserBox onClick={(e) => setOpenUserMenu(true)}>
							<Avatar sx={{ width: 30, height: 30 }} src='' />
							<Typography variant='span'>User</Typography>
						</UserBox>
					</>
				) : (
					<Button onClick={setLoggedIn} variant='contained' color='secondary'>
						Login
					</Button>
				)}
			</StyledToolBar>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				open={openUserMenu}
				onClose={(e) => setOpenUserMenu(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem
					component={Link}
					to={'/profile'}
					// color='inherit'
				>
					Profile
				</MenuItem>

				<MenuItem>My account</MenuItem>
				<MenuItem onClick={logout}>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
