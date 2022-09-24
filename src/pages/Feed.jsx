import { Box, Typography } from '@mui/material';

import Post from '../components/Post';

const Feed = ({ posts, deletePost, editPost, isLoggedIn }) => {
	return (
		<Box flex={4} p={2}>
			{posts.length > 0 ? (
				posts.map((post) => (
					<Post
						key={post.id}
						post={post}
						deletePost={deletePost}
						editPost={editPost}
						isLoggedIn={isLoggedIn}
					/>
				))
			) : (
				<Typography>There is no posts. Create one...</Typography>
			)}
		</Box>
	);
};

export default Feed;
