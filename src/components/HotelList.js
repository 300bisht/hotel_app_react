import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link
} from "react-router-dom";
function HotelList({ }) {
  const [hotels, setHotels] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [hoteldata, setHoteldata] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:4000/locations')
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, [locationFilter]);

  const handleFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    axios.get(`http://localhost:4000/locations?query=${locationFilter}`)
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  };

 
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location"
        onChange={handleFilterChange}
      />
      <button type="submit">Search</button>
      </form>
      <h2>Hotels</h2>
      <ul>
      {hotels.map(hotel => (
        <Link to="/BookingForm">{hotel.name}</Link>
      ))}
    </ul>
    </div>
  );
}

export default HotelList;
