import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListingBooking = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get(`/api/bookings?user_id=${userId}`);
      setBookings(response.data);
    };

    fetchBookings();
  }, [userId]);

  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>Check-in: {booking.check_in_date}</p>
          <p>Check-out: {booking.check_out_date}</p>
          <p>Guests: {booking.guests}</p>
        </div>
      ))}
    </div>
  );
};

export default ListingBooking;