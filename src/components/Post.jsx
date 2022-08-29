import React from 'react';
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
// import image1 from '../fenix-main-image.JPG';

const Post = () => {
	return (
		<Card sx={{ margin: 5 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: 'red' }} aria-label='about'>
						A
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVert />
					</IconButton>
				}
				title='AAAAAAA'
				subheader='September 14, 2022'
			/>
			<CardMedia
				component='img'
				height='20%'
				image='https://www.flickr.com/photos/cseeman/43366442002'
				alt='descriptive text'
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
					volutpat ultrices erat et interdum. Curabitur ut tempor tellus. Mauris
					sapien mauris, elementum id egestas sed, suscipit sed erat. Maecenas
					congue, tellus vitae gravida finibus, quam magna gravida leo, quis
					hendrerit urna nibh id purus. Morbi in lacus eu est efficitur
					vestibulum. Duis placerat arcu tincidunt rhoncus maximus. Fusce a
					dignissim nulla. Suspendisse ut volutpat mauris, pretium blandit
					tortor. Aliquam erat volutpat. Cras ac erat ut nisl cursus pulvinar ac
					sit amet arcu. Sed gravida mattis mollis. In vel porttitor enim. Fusce
					pellentesque augue vel ornare auctor. Donec sit amet sapien malesuada,
					commodo lorem at, fermentum nisl. Quisque in ultricies mi. Fusce
					tristique euismod lectus, a sollicitudin magna molestie at. Fusce quam
					ex, gravida at tempor non, mollis quis tortor. Vivamus venenatis
					mattis porttitor. Nullam vitae ornare tortor, non maximus justo. Nunc
					vitae tincidunt ligula.
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
