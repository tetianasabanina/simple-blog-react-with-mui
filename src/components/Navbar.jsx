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

const Navbar = ({ mode, setMode, isLoggedIn, setLoggedOut, setLoggedIn }) => {
	const [openUserMenu, setOpenUserMenu] = useState(false);
	const [openMainMenu, setOpenMainMenu] = useState(false);
	const logout = () => {
		setLoggedOut();
		setOpenUserMenu(false);
	};

	return (
		<AppBar position='sticky' sx={{ backgroundColor: 'primary.dark' }}>
			<StyledToolBar>
				<Typography variant='h6' sx={{ display: { xs: 'none', md: 'block' } }}>
					My Blog
				</Typography>
				<FlutterDash sx={{ display: { xs: 'block', md: 'none' } }} />
				<IconButton
					onClick={(e) => setOpenMainMenu(true)}
					size='large'
					edge='start'
					// color='inherit'
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
