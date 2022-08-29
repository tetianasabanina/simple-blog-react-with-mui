import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from '@mui/material';
import { Home, Settings, AccountBox, ModeNight } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = ({ mode, setMode, isLoggedIn }) => {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position='fixed'>
				<List>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<Link to={'/'}>
								<ListItemText primary='Homepage' />
							</Link>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#settings'>
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<Link to={'/settings'}>
								<ListItemText primary='Settings' />
							</Link>
						</ListItemButton>
					</ListItem>
					{isLoggedIn && (
						<ListItem disablePadding>
							<ListItemButton component='a' href='#profile'>
								<ListItemIcon>
									<AccountBox />
								</ListItemIcon>
								<Link to={'/profile'}>
									<ListItemText primary='Profile' />
								</Link>
							</ListItemButton>
						</ListItem>
					)}

					<ListItem>
						<>
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch
								onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
							/>
						</>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
