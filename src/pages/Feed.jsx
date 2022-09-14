import { Box } from '@mui/material';

import Post from '../components/Post';

const Feed = ({ posts }) => {
	return (
		<Box flex={4} p={2}>
			{posts.map((post) => (
				<Post
					key={post.id}
					postImage={post.image}
					altImageText={post.title}
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
