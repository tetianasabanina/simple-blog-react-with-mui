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
	AddCircleOutline,
} from '@mui/icons-material';
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';

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
	const language = useContext(LanguageContext);
	const anotherLanguage = language === 'en' ? 'FI' : 'EN';
	const [textInSelectedLanguage, setTextInSelectedLanguage] = useState('');
	const [textInSecondLanguage, setTextInSecondLanguage] = useState('');
	const textObject = {
		default: '',
		english: '',
		finnish: '',
	};
	const [open, setOpen] = useState(false);
	const [postText, setText] = useState(textObject);
	const [title, setTitle] = useState('');
	const [isAnotherLanguage, setAnotherLanguage] = useState(false);

	const handleChangeText = (event) => {
		const currentText = event.target.value;
		setTextInSelectedLanguage(currentText);
	};

	const handleChangeTextSecond = (event) => {
		const currentText = event.target.value;
		setTextInSecondLanguage(currentText);
	};

	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};

	const onAddLanguage = () => {
		setAnotherLanguage(true);
		setHeight('400px');
	};
	const closeModal = () => {
		setText(textObject);
		setTitle('');
		setOpen(false);
		setTextInSelectedLanguage('');
		setAnotherLanguage(false);
		setHeight('320px');
	};

	const createTextObject = () => {
		let textObject = '';
		switch (language) {
			case 'en':
				textObject = {
					...postText,
					english: textInSelectedLanguage,
					finnish: textInSecondLanguage,
					default: textInSelectedLanguage,
				};
				break;
			case 'fi':
				textObject = {
					...postText,
					english: textInSecondLanguage,
					finnish: textInSelectedLanguage,
					default: textInSelectedLanguage,
				};
				break;
			default:
				textObject = { ...postText, default: textInSelectedLanguage };
		}
		return textObject;
	};

	const createPost = () => {
		const image = '';
		const alt = title;
		const text = createTextObject();
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
	const [boxHeight, setHeight] = useState('320px');

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
						height: boxHeight,
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
						value={textInSelectedLanguage}
						onChange={handleChangeText}
					/>
					{isAnotherLanguage ? (
						<TextField
							sx={{ width: '100%' }}
							id='post-text-second'
							multiline
							rows={3}
							placeholder={`Add text in another language (${anotherLanguage})`}
							variant='standard'
							value={textInSecondLanguage}
							onChange={handleChangeTextSecond}
						/>
					) : (
						<>
							<span>{anotherLanguage}</span>
							<IconButton color='primary' onClick={onAddLanguage}>
								<AddCircleOutline />
							</IconButton>
						</>
					)}
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
