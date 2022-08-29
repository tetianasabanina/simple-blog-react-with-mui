import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
} from '@mui/material';
import { MoreVert, Favorite, Share, FavoriteBorder } from '@mui/icons-material';

const Post = ({
	postImage,
	altImageText,
	postTitle,
	postAvatar,
	postText,
	subheader,
}) => {
	return (
		<Card sx={{ margin: 5 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: 'red' }} aria-label='about'>
						{postAvatar}
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVert />
					</IconButton>
				}
				title={postTitle}
				subheader={subheader}
			/>
			<CardMedia
				component='img'
				height='20%'
				image={postImage}
				alt={altImageText}
			/>
			<CardContent>
				<Typography
					sx={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: '3',
						WebkitBoxOrient: 'vertical',
					}}
					variant='body2'
					color='text.secondary'
				>
					{' '}
					{postText}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: 'red' }} />}
					/>
				</IconButton>
				<IconButton aria-label='share'>
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;
