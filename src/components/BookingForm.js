import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function BookingForm({ selectedRoom }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/bookings', {
        booking: { check_in_date: checkInDate,check_out_date: checkOutDate,room_id: 1,user_id: 1,hotel_id: 1}
      },
      );
      //Redirect to homepage after booking
      navigate('/UserBookings');
    } catch (error) {
      console.error('Error booking room:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Room - </h2>
      <label>
        Check-in Date:
        <input type="date" name ="checkindate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
      </label>
      <label>
        Check-out Date:
        <input type="date" name ="checkoutdate" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
      </label>
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
