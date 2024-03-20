import React, { useState } from 'react';

function BookingForm({ selectedRoom }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Room - {selectedRoom.name}</h2>
      <label>
        Check-in Date:
        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
      </label>
      <label>
        Check-out Date:
        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
      </label>
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
