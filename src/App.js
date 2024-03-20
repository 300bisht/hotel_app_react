import React, { useState } from 'react';
import axios from 'axios';
import SearchLocation from './components/SearchLocation';
import BookRoom from './components/BookRoom';
import EditBooking from './components/EditBooking';
import ListingBooking from './components/ListingBooking';

const App = () => {
  const [location, setLocation] = useState('');
  const [hotelId, setHotelId] = useState('');
  const [userId, setUserId] = useState('');

  const handleLocationChange = async (selectedLocation) => {
    setLocation(selectedLocation);
    setHotelId(''); // Reset hotel selection when location changes
  };

  const handleHotelChange = (selectedHotelId) => {
    setHotelId(selectedHotelId);
  };

  const handleUserChange = (selectedUserId) => {
    setUserId(selectedUserId);
  };

  return (
    <div>
      <h1>Hotel Booking App</h1>
      <div>
        <h2>Search Location</h2>
        <SearchLocation setLocation={handleLocationChange} />
      </div>
      {location && (
        <div>
          <h2>Book Room</h2>
          <BookRoom hotelId={hotelId} userId={userId} />
        </div>
      )}
      {userId && (
        <div>
          <h2>Edit Booking</h2>
          <EditBooking userId={userId} />
        </div>
      )}
      {userId && (
        <div>
          <h2>Listing Booking</h2>
          <ListingBooking userId={userId} />
        </div>
      )}
    </div>
  );
};

export default App;