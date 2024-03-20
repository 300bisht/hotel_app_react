import React, { useState } from 'react';
import axios from 'axios';

const BookRoom = ({ hotelId, userId }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');

  const bookRoom = async () => {
    try {
      await axios.post('/api/bookings', {
        user_id: userId,
        hotel_id: hotelId,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        guests: guests
      });
      // Handle success
    } catch (error) {
      console.error('Error booking room:', error);
    }
  };

  return (
    <div>
      <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
      <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
      <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} />
      <button onClick={bookRoom}>Book</button>
    </div>
  );
};

export default BookRoom;