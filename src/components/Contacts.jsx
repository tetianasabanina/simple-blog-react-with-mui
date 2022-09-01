import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Link,
	Button,
	styled,
} from '@mui/material';
import { Home, Phone, Telegram, Facebook } from '@mui/icons-material';

const details = {
	phoneNumber1: '+35805050000',
	phoneNumber2: '+35805050001',
	email: 'myblog@myblog.com',
	telegram: 'https://t.me/fenixpsychhelp',
	facebook: 'https://www.facebook.com/groups/fenixpsychhelp',
	address: 'Somestreet, 123',
	postalCode: '',
	city: '',
};

const StyledListItem = styled(ListItem)({
	backgroundColor: 'primary.main',
	'&:hover': {
		backgroundColor: 'primary.light',
		opacity: [0.9, 0.8, 0.7],
	},
	padding: '0 8px',
});

const Contacts = () => {
	return (
		<Box flex={4} m='auto'>
			<List>
				<StyledListItem>
					<ListItemIcon sx={{ color: 'white' }}>
						<Phone />
					</ListItemIcon>
					<ListItemText
						sx={{ color: 'white' }}
						primary={details.phoneNumber1}
					/>
				</StyledListItem>
				<StyledListItem disablePadding>
					<ListItemIcon sx={{ color: 'white' }}>
						<Phone />
					</ListItemIcon>
					<ListItemText
						sx={{ color: 'white' }}
						primary={details.phoneNumber2}
					/>
				</StyledListItem>
				<StyledListItem disablePadding>
					<ListItemIcon sx={{ color: 'white' }}>
						<Home />
					</ListItemIcon>
					<ListItemText sx={{ color: 'white' }}>{details.address}</ListItemText>
				</StyledListItem>
				<StyledListItem disablePadding>
					<Link
						href={details.telegram}
						target='_blank'
						rel='noopener'
						underline='always'
						sx={{ color: 'white', padding: 0 }}
						aria-label='Visit our Telegram channel'
						component={Button}
					>
						<ListItemIcon sx={{ color: 'white' }}>
							<Telegram />
						</ListItemIcon>
						<ListItemText>{'Telegram'}</ListItemText>
					</Link>
				</StyledListItem>
				<StyledListItem disablePadding>
					<Link
						href={details.facebook}
						target='_blank'
						rel='noopener'
						underline='always'
						sx={{
							color: 'white',
							padding: 0,
						}}
						aria-label='Visit our Facebook page'
						component={Button}
					>
						<ListItemIcon sx={{ color: 'white' }}>
							<Facebook />
						</ListItemIcon>
						<ListItemText>{'Facebook'}</ListItemText>
					</Link>
				</StyledListItem>
			</List>
		</Box>
	);
};

export default Contacts;
