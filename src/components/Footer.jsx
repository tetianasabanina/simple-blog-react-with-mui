import { Box, AppBar, Stack } from '@mui/material';
import Contacts from './Contacts';
import Map from './Map';

const Footer = () => {
	return (
		<Box mt={3}>
			<AppBar sx={{ top: 'auto', bottom: 0 }} position='relative'>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					spacing={{ xs: 1, sm: 2, md: 4 }}
					justifyContent={{ sm: 'space-between' }}
				>
					<Contacts />
					<Map />
				</Stack>
			</AppBar>
		</Box>
	);
};

export default Footer;
