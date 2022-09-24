import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Modal,
	Stack,
	styled,
	TextField,
	Typography,
	IconButton,
} from '@mui/material';
import {
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

const EditModal = ({ editPost, post, isModalOpen, onCloseModal }) => {
	const [open, setOpen] = useState(isModalOpen);
	const [postText, setText] = React.useState(post.text);
	const [title, setTitle] = React.useState(post.title);
	const handleChangeText = (event) => {
		setText(event.target.value);
	};
	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const closeModal = () => {
		setText(post.text);
		setTitle(post.title);
		setOpen(false);
	};
	const modifyPost = () => {
		const alt = title;
		const text = postText;
		const modified = new Date();
		const newPost = {
			...post,
			alt,
			title,
			text,
			modified,
		};
		editPost(newPost);
		closeModal();
		onCloseModal();
	};

	return (
		<StyledModal
			open={open}
			onClose={(e) => closeModal()}
			aria-labelledby='add-edit-modal-title'
			aria-describedby='add-edit-modal-description'
		>
			<Box
				component='form'
				width={400}
				height={320}
				bgcolor={'background.paper'}
				color={'text.primary'}
				borderRadius={5}
				padding={1}
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
						{post.userName}
					</Typography>
				</UserBox>
				<UserBox>
					<Typography fontWeight={400} variant='span'>
						Title:
					</Typography>
					<TextField
						// sx={{ width: '100%' }}
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
					value={postText}
					onChange={handleChangeText}
				/>
				<Stack direction='row' gap={1} mt={2} mb={3}>
					<EmojiEmotions color='primary' />
					<Image color='secondary' />
					<VideoCameraBack color='success' />
					<PersonAdd color='error' />
				</Stack>
				<ButtonGroup fullWidth variant='contained' aria-label='modal-actions'>
					<Button onClick={modifyPost}>Post</Button>
					<Button sx={{ width: 100 }}>
						<DateRange />
					</Button>
				</ButtonGroup>
			</Box>
		</StyledModal>
	);
};

export default EditModal;
