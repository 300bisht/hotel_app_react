import React, { useState } from 'react';
import axios from 'axios';
// import BookRoom from './components/BookRoom';
// import EditBooking from './components/EditBooking';
// import ListingBooking from './components/ListingBooking';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BookingForm from './components/BookingForm';
import UserBooking from './components/UserBookings';
import EditUserBooking from './components/EditBookingForm';
import HotelList from './components/HotelList';
const App = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HotelList/>}/>
          <Route path="/BookingForm" element={<BookingForm/>}/>
          <Route path="/UserBookings" element={<UserBooking/>}/>
          <Route path="/bookings/:bookingId/edit" element={<EditUserBooking/>} />
        </Routes>
      </Router>
  );
};

export default App;