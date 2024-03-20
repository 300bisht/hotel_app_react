import React, { useState } from 'react';
import axios from 'axios';

function EditBookingForm({ bookingId }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  // Fetch existing booking data
  useEffect(() => {
    axios.get(`/api/bookings/${bookingId}`)
      .then(response => {
        const { check_in_date, check_out_date } = response.data;
        setCheckInDate(check_in_date);
        setCheckOutDate(check_out_date);
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
      });
  }, [bookingId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingData = {
      check_in_date: checkInDate,
      check_out_date: checkOutDate
    };
    axios.patch(`/api/bookings/${bookingId}`, { booking: bookingData })
      .then(response => {
        console.log('Booking updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating booking:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Check-in Date:
        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
      </label>
      <label>
        Check-out Date:
        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default EditBookingForm;
