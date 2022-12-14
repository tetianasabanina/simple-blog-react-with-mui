import { Box, List, ListItem, Tooltip } from '@mui/material';
import { Home, Settings, AccountBox } from '@mui/icons-material';

import ListItemLink from './ListItemLink';
import MaterialUISwitch from './MaterialUiSwitch';

const Sidebar = ({ mode, setMode, isLoggedIn }) => {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', md: 'block' } }}>
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
					<Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark Mode'}>
						<ListItem sx={{ paddingLeft: '8px' }}>
							<MaterialUISwitch
								color='secondary'
								onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
							/>
						</ListItem>
					</Tooltip>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
