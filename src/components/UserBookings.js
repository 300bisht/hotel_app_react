import React, { useState, useEffect } from 'react';
import api from '../services/api';

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        // Make API call to fetch user's bookings
        const response = await api.get('/user/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching user bookings:', error);
      }
    };

    fetchUserBookings();
  }, []);

  return (
    <div>
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <p>Room: {booking.room}</p>
            <p>Check-in Date: {booking.checkInDate}</p>
            <p>Check-out Date: {booking.checkOutDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};