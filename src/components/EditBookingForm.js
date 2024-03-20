import React, { useState } from 'react';
import axios from 'axios';

const EditBooking = ({ bookingId, userId }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');

  const updateBooking = async () => {
    try {
      await axios.put(`/api/bookings/${bookingId}`, {
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        guests: guests
      });
      // Handle success
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  return (
    <div>
      <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
      <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
      <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} />
      <button onClick={updateBooking}>Update</button>
    </div>
  );
};

export default EditBooking;
