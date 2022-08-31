import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

const ListItemLink = (props) => {
	const { icon, primary, to } = props;

	const renderLink = React.useMemo(
		() =>
			React.forwardRef(function Link(itemProps, ref) {
				return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
			}),
		[to]
	);

	return (
		<li>
			<ListItem button component={renderLink}>
				{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
				<ListItemText primary={primary} />
			</ListItem>
		</li>
	);
};
export default ListItemLink;
