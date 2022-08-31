import { Box, Toolbar, styled, AppBar } from '@mui/material';
import Contacts from './Contacts';
import Map from './Map';

const StyledToolBar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});
const Footer = () => {
	return (
		<Box mt={3}>
			<AppBar color='primary' sx={{ top: 'auto', bottom: 0 }} position='float'>
				<StyledToolBar>
					<Contacts />
					<Map />
				</StyledToolBar>
			</AppBar>
		</Box>
	);
};

export default Footer;
