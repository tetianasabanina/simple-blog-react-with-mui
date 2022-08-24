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
				title='Fenix PsychHelp'
				subheader='September 14, 2022'
			/>
			<CardMedia
				component='img'
				height='20%'
				image='https://www.flickr.com/photos/cseeman/43366442002'
				alt='Fenix'
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					Fenix Finland ry on matalan kynnyksen periaatteella toimiva ja
					psykososiaalista tukea tarjoava yhdistys. Yhdistyksemme tehtävänä on
					mielenterveyttä edistävien palveluiden tuottaminen sekä
					psykososiaalisen tuen tarjoaminen vaikeassa elämäntilanteessa oleville
					maahanmuuttajille heidän äidinkielellään.
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
