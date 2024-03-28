import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link
} from "react-router-dom";
const ListingBooking = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
      debugger;
    const fetchBookings = async () => {
      const response = await axios.get('http://localhost:4000/bookings?user_id=1');
      setBookings(response.data);
    };

    fetchBookings();
  }, [userId]);

  return (
    <div>
      <h2>All Bookings</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
          </tr>
        </thead>
        <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.check_in_date}</td>
            <td>{booking.check_out_date}</td>
            <Link to={`/bookings/${booking.id}/edit`}>Edit</Link>
          </tr>  
        ))}
        </tbody>
        </table>
    </div>
  );
};

export default ListingBooking;