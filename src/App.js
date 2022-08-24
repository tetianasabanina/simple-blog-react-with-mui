import Button from '@mui/material/Button';
import { Add, Settings } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function App() {
	const BlueButton = styled(Button)({
		backgroundColor: 'skyblue',
		color: '#888',
		margin: 5,
		'&:hover': {
			backgroundColor: 'lightBlue',
		},
		'&:disabled': {
			backgroundColor: 'gray',
			color: 'white',
		},
	});
	return (
		<div>
			<Button variant='text'>Text</Button>
			<Button startIcon={<Settings />} variant='contained' color='secondary'>
				Settings
			</Button>
			<Button startIcon={<Add />} variant='contained' color='success'>
				Add new post
			</Button>
			<Button variant='outlined'>Outlined</Button>
			<Typography variant='h1'>It uses h1</Typography>
			<BlueButton>One</BlueButton>
			<BlueButton>Two</BlueButton>
		</div>
	);
}

export default App;
