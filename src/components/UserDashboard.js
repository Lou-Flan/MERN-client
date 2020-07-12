import React from 'react';
import Bookings from './Bookings';
import Booking from './Booking';
import { useGlobalState } from '../config/globalState';

const divStyles = {
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	flexWrap: 'wrap',
};

const dummyDiv = {
	width: '500px',
	height: '300px',
	background: 'red',
};

const UserDashboard = () => {
	const { store } = useGlobalState();
	const { loggedInUser } = store;
	return (
		<div
			style={{
				position: 'fixed',
				right: '0',
				bottom: '0',
				height: '90vh',
				background: 'lightBlue',
				width: '90vw',
				zIndex: '1',
			}}
		>
			<div style={divStyles}>
				<div style={dummyDiv}>dummy data</div>
				<Bookings />
				<Booking />
				<div style={dummyDiv}>dummy data</div>
			</div>
		</div>
	);
};

export default UserDashboard;
