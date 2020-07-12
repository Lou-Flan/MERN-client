import React from 'react';
import { useGlobalState } from '../config/globalState';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Bookings = () => {
	const { store } = useGlobalState();
	const { bookings } = store;

	const useStyles = makeStyles((theme) => ({
		seeMore: {
			marginTop: theme.spacing(3),
		},
	}));

	const classes = useStyles();

	function preventDefault(event) {
		event.preventDefault();
	}

	return (
		<div>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Continent</TableCell>
						<TableCell>Currency</TableCell>
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
								<TableCell>{booking.currency}</TableCell>
								<TableCell align="right">{booking.teeth}</TableCell>
								<TableCell align="right">
									<Link to={`/bookings/${booking._id}`}>View</Link>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Link color="primary" href="#" onClick={preventDefault}>
					See more orders
				</Link>
			</div>
		</div>
	);
};

export default Bookings;
