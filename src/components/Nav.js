import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
	return (
		<>
			<ul>
				<li>
					<Link to={'/'}>Home</Link>{' '}
				</li>
				<li>
					<Link to={'/profile'}>Profile</Link>{' '}
				</li>
				<li>
					<Link to={'/settings'}>Settings</Link>{' '}
				</li>
			</ul>
			<Outlet />
		</>
	);
};
export default Nav;
