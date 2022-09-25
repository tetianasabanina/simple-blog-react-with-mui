import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Fab,
	Modal,
	Stack,
	styled,
	TextField,
	Tooltip,
	Typography,
	IconButton,
} from '@mui/material';
import {
	Add as AddIcon,
	EmojiEmotions,
	PersonAdd,
	Image,
	VideoCameraBack,
	DateRange,
	Close,
} from '@mui/icons-material';
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const UserBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	marginBottom: '20px',
});

const HeaderBox = styled(Box)({
	display: 'flex',
	justifyContent: 'flex-end',
});

const Add = ({ addPost, userName = 'John Dow', avatar, id = 100 }) => {
	const textObject = {
		default: '',
		english: '',
		finnish: '',
	};
	const [open, setOpen] = useState(false);
	const [postText, setText] = useState(textObject);
	const [title, setTitle] = useState('');

	const handleChangeText = (event) => {
		const defaultText = event.target.value;
		const text = { ...postText, default: defaultText };
		setText(text);
	};
	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const closeModal = () => {
		setText(textObject);
		setTitle('');
		setOpen(false);
	};
	const createPost = () => {
		const image = '';
		const alt = title;
		const text = postText;
		const createdAt = new Date();
		const newPost = {
			id,
			image,
			alt,
			title,
			avatar,
			userName,
			text,
			createdAt,
		};
		addPost(newPost);
		closeModal();
	};

	return (
		<>
			<Tooltip
				title='Add a new post'
				sx={{
					position: 'fixed',
					position: '-webkit - sticky',
					position: 'sticky',
					bottom: '5rem',
					left: { xs: 'calc(50% - 25px)', md: 30 },
				}}
				onClick={(e) => setOpen(true)}
			>
				<Fab color='secondary' aria-label='add'>
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => closeModal()}
				aria-labelledby='add-edit-modal-title'
				aria-describedby='add-edit-modal-description'
			>
				<Box
					component='form'
					sx={{
						height: '320px',
						width: {
							xs: 400,
							sm: 500,
							md: 600,
							lg: 700,
							xl: 900,
						},
					}}
					bgcolor={'background.paper'}
					color={'text.primary'}
					borderRadius={5}
					padding={2}
				>
					<HeaderBox>
						<IconButton
							onClick={(e) => {
								closeModal();
							}}
							aria-label='close the modal window'
						>
							<Close />
						</IconButton>
					</HeaderBox>

					<UserBox>
						<Avatar src='' sx={{ width: 30, height: 30 }} />
						<Typography fontWeight={500} variant='span'>
							{userName}
						</Typography>
					</UserBox>
					<UserBox>
						<Typography fontWeight={400} variant='span'>
							Title:
						</Typography>
						<TextField
							// sx={{ width: '100%' }}
							fullWidth
							id='standard-multiline-static'
							variant='standard'
							value={title}
							onChange={handleChangeTitle}
						/>
					</UserBox>

					<TextField
						sx={{ width: '100%' }}
						id='post-text'
						multiline
						rows={3}
						placeholder="What's on your mind?"
						variant='standard'
						value={postText.default}
						onChange={handleChangeText}
					/>
					<Stack direction='row' gap={1} mt={2} mb={3}>
						<EmojiEmotions color='primary' />
						<Image color='secondary' />
						<VideoCameraBack color='success' />
						<PersonAdd color='error' />
					</Stack>
					<ButtonGroup
						fullWidth
						variant='contained'
						aria-label='outlined primary button group'
					>
						<Button onClick={createPost}>Post</Button>
						<Button sx={{ width: 100 }}>
							<DateRange />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
