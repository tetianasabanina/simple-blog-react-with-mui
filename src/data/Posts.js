import image1 from '../images/peippo1.jpg';
import image2 from '../images/crocus-tm-mix.jpg';
import { NestCamWiredStandTwoTone } from '@mui/icons-material';
const loremIpsum =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Posts = [
	{
		id: 1,
		image: image1,
		alt: 'peippo',
		title: 'Peippo',
		avatar: 'A',
		userName: 'Anna',
		text: loremIpsum,
		createdAt: new Date(2022, 8, 8),
	},
	{
		id: 2,
		image: image2,
		alt: 'crocus',
		title: 'Crocus',
		userName: 'Bella',
		avatar: 'B',
		text: loremIpsum,
		createdAt: new Date(2022, 8, 20),
	},
	{
		id: 3,
		image: image1,
		alt: 'peippo',
		title: 'Peippo',
		avatar: 'A',
		userName: 'Sanna',
		text: loremIpsum,
		createdAt: new Date(2022, 8, 22),
		archivedAt: new Date(2022, 8, 23),
	},
];

export default Posts;
