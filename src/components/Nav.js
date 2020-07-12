import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../config/globalState';

const Nav = () => {
	const { dispatch, store } = useGlobalState();
	const { loggedInUser } = store;
	const topNav = {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'row',
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		position: 'fixed',
		left: '0%',
		top: '0%',
		width: '100vw',
		height: '10vh',
		zIndex: '10',
	};
	const leftNav = {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		background: '#1D2D43',
		opacity: '.6',
		height: '90vh',
		width: '10vw',
		position: 'fixed',
		left: '0%',
		bottom: '0%',
		zIndex: '10',
	};

	const linkStyles = {
		fontSize: '1.2em',
		textDecoration: 'none',
		margin: '.5em',
		color: 'gray',
		fontFamily: 'Roboto',
	};

	const logoutUser = () => {
		dispatch({
			type: 'setLoggedInUser',
			data: null,
		});
	};

	return (
		<div>
			{loggedInUser ? (
				<div>
					<div style={topNav}>
						<Link style={linkStyles} to="/dashboard">
							{loggedInUser}
						</Link>
						<Link style={linkStyles} to="/auth/login" onClick={logoutUser}>
							Logout
						</Link>
						<Link style={linkStyles} to="/booking/new">
							Add a booking
						</Link>
						<Link style={linkStyles} to="/bookings">
							Bookings
						</Link>
					</div>
					<div style={leftNav}>
						<Link style={linkStyles} to="/booking/new">
							Add a booking
						</Link>
						<Link style={linkStyles} to="/bookings">
							Bookings
						</Link>
					</div>
				</div>
			) : (
				<div>
					<Link style={linkStyles} to="/auth/login">
						Login
					</Link>
					<Link style={linkStyles} to="/auth/register">
						Register
					</Link>
				</div>
			)}
		</div>
	);
};

export default Nav;
