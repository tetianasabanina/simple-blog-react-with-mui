import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FlutterDash, ModeNight } from '@mui/icons-material';
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
	ListItemIcon,
	Switch,
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

const Navbar = ({ mode, setMode }) => {
	const [openUserMenu, setOpenUserMenu] = useState(false);
	const [openMainMenu, setOpenMainMenu] = useState(false);

	return (
		<AppBar position='sticky'>
			<StyledToolBar>
				<Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
					My Blog
				</Typography>
				<FlutterDash sx={{ display: { xs: 'block', sm: 'none' } }} />
				<IconButton
					onClick={(e) => setOpenMainMenu(true)}
					size='large'
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
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
					<MenuItem>
						<Link to={'/'}>Home</Link>
					</MenuItem>
					<MenuItem>
						<Link to={'/settings'}>Settings</Link>
					</MenuItem>
					<MenuItem>
						<Link to={'/profile'}>Profile</Link>
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<ModeNight fontSize='small' />
						</ListItemIcon>
						<Switch
							onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
						/>
					</MenuItem>
				</Menu>
				{/* <Outlet /> */}
				<Search>
					<InputBase placeholder='search...' />
				</Search>
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
				<MenuItem>
					<Link to={'/profile'}>Profile</Link>
				</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
