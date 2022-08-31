import { Box, List, ListItem, ListItemIcon, Switch } from '@mui/material';
import { Home, Settings, AccountBox, ModeNight } from '@mui/icons-material';

import ListItemLink from './ListItemLink';

const Sidebar = ({ mode, setMode, isLoggedIn }) => {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position='fixed'>
				<List>
					<ListItemLink
						disablePadding
						to={'/'}
						primary='Homepage'
						icon={<Home />}
					/>
					<ListItemLink
						disablePadding
						to={'/settings'}
						primary='Settings'
						icon={<Settings />}
					/>
					{isLoggedIn && (
						<ListItemLink
							disablePadding
							to={'/profile'}
							primary='Profile'
							icon={<AccountBox />}
						/>
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
