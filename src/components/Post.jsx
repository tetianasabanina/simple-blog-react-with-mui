import React, { useState, Fragment } from 'react';
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
	Menu,
	MenuItem,
} from '@mui/material';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import IconButton from '@mui/joy/IconButton';
// import Menu from '@mui/joy/Menu';
// import MenuItem from '@mui/joy/MenuItem';
import { MoreVert, Favorite, Share, FavoriteBorder } from '@mui/icons-material';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';

const Post = ({
	postImage,
	altImageText,
	postTitle,
	postAvatar,
	postText,
	subheader,
	postId,
	deletePost,
	editPost,
	isLoggedIn,
}) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const onDeletePost = () => {
		deletePost(postId);
		handleClose();
	};

	const onEditPost = () => {
		console.log('EditPost', postId);
		// const post = {

		// }
		// editPost(post);
		handleClose();
	};

	return (
		<Fragment>
			<Card sx={{ margin: 5 }}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: 'red' }} aria-label='about'>
							{postAvatar}
						</Avatar>
					}
					action={
						isLoggedIn && (
							<IconButton
								aria-label='actions'
								id='actions-button'
								aria-controls={open ? 'actions' : undefined}
								aria-haspopup='true'
								aria-expanded={open ? 'true' : undefined}
								variant='outlined'
								onClick={handleClick}
							>
								<MoreVert />
							</IconButton>
						)
					}
					title={postTitle}
					subheader={subheader.toDateString()}
				/>
				{postImage && (
					<CardMedia
						component='img'
						height='20%'
						image={postImage}
						alt={altImageText}
					/>
				)}
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
			<Menu
				id='actions'
				aria-labelledby='actions-button'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				placement='bottom-end'
			>
				<MenuItem onClick={onEditPost}>
					<ListItemDecorator>
						<Edit />
					</ListItemDecorator>{' '}
					Edit
				</MenuItem>
				<MenuItem onClick={onDeletePost} variant='soft' color='danger'>
					<ListItemDecorator sx={{ color: 'inherit' }}>
						<DeleteForever />
					</ListItemDecorator>{' '}
					Delete
				</MenuItem>
			</Menu>
		</Fragment>
	);
};

export default Post;
