import { Box } from '@mui/material';

import Post from '../components/Post';

const Feed = ({ posts, deletePost, editPost, isLoggedIn }) => {
	return (
		<Box flex={4} p={2}>
			{posts.map((post) => (
				<Post
					key={post.id}
					postId={post.id}
					postImage={post.image}
					altImageText={post.title}
					postTitle={post.title}
					postAvatar={post.avatar}
					postText={post.text}
					subheader={post.date}
					deletePost={deletePost}
					editPost={editPost}
					isLoggedIn={isLoggedIn}
				/>
			))}
		</Box>
	);
};

export default Feed;
