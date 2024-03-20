import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import HotelList from './components/HotelList';
import BookingForm from './components/BookingForm';
import RoomList from './components/RoomList';

//import EditBookingForm from './components/EditBookingForm';

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null); 
  

  const handleHotelSelect = (hotel) => {
    debugger;
    setSelectedHotel(hotel); // Set the selected hotel
  };



  return (
    <div className="App">
      <h1>Hotel Booking App</h1>
      <SearchBar />

      <div className="content">
        <div className="hotel-list">
          <h2>Hotels</h2>
          <HotelList onHotelSelect={handleHotelSelect} />
        </div>
        <div className="booking-section">
          {selectedHotel && <RoomList hotel={selectedHotel} />}
        </div>
      </div>
    </div>
  );
}

export default App;
