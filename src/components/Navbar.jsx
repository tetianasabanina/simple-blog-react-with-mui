import React, { useState } from 'react';
import { FlutterDash } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

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

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<AppBar position='sticky'>
			<StyledToolBar>
				<Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
					My Blog
				</Typography>
				<FlutterDash sx={{ display: { xs: 'block', sm: 'none' } }} />
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
						onClick={(e) => setOpen(true)}
					/>
				</Icons>
				<UserBox onClick={(e) => setOpen(true)}>
					<Avatar sx={{ width: 30, height: 30 }} src='' />
					<Typography variant='span'>User</Typography>
				</UserBox>
			</StyledToolBar>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				open={open}
				onClose={(e) => setOpen(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
