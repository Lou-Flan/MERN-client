import React from 'react';
import { useGlobalState } from '../config/globalState';
import { Link } from 'react-router-dom';
import Button from './styled/Button';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@material-ui/core';

const Bookings = () => {
	const { store } = useGlobalState();
	const { bookings } = store;

	const tableStyles = {
		width: '60vw',
	};

	function preventDefault(event) {
		event.preventDefault();
	}

	return (
		<div>
			<Table size="small" style={tableStyles}>
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Continent</TableCell>
						<TableCell align="right">Teeth</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{bookings
						.sort((a, b) => b.modified_date - a.modified_date)
						.map((booking) => (
							<TableRow key={booking._id}>
								<TableCell>{booking.modified_date.toLocaleString()}</TableCell>
								<TableCell>
									{booking.name} {booking.surname}
								</TableCell>
								<TableCell>{booking.continent}</TableCell>
								<TableCell align="right">{booking.teeth}</TableCell>
								<TableCell align="right">
									<Link to={`/bookings/${booking._id}`}>
										<Button>View</Button>
									</Link>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
			<div>
				<Link color="primary" href="#" onClick={preventDefault}>
					See more orders
				</Link>
			</div>
		</div>
	);
};

export default Bookings;
