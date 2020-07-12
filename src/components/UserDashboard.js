import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useGlobalState } from '../config/globalState';
import Bookings from './Bookings';
import Booking from './Booking';
import EditBooking from './EditBooking';
import NewBooking from './NewBooking';

const UserDashboard = () => {
	return (
		<div>
			<h1>I am the User Dashboard</h1>
			<Bookings />
		</div>
	);
};

export default UserDashboard;
