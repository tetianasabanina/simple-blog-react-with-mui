import { Box } from '@mui/material';

import Post from '../components/Post';
import image1 from '../images/peippo.jpg';
import image2 from '../images/crocus-tm-mix.jpg';

const Feed = () => {
	const loremIpsum =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	const posts = [
		{
			id: 1,
			image: image1,
			alt: 'peippo',
			title: 'Peippo',
			avatar: 'A',
			text: loremIpsum,
			date: '29.08.2022',
		},
		{
			id: 2,
			image: image2,
			alt: 'crocus',
			title: 'Crocus',
			avatar: 'B',
			text: loremIpsum,
			date: '28.08.2022',
		},
	];

	return (
		<Box flex={4} p={2}>
			{posts.map((post) => (
				<Post
					key={post.id}
					postImage={post.image}
					altImageText={post.text}
					postTitle={post.title}
					postAvatar={post.avatar}
					postText={post.text}
					subheader={post.date}
				/>
			))}
		</Box>
	);
};

export default Feed;
