import React, { useState } from 'react';

const hotelsData = [
  { id: 1, name: "Hotel A", location: "City A" },
  { id: 2, name: "Hotel B", location: "City B" },
  { id: 3, name: "Hotel C", location: "City C" }
];

function HotelList({ setSelectedHotel, setSelectedRoom, setEditMode }) {
  const [hotels, setHotels] = useState(hotelsData);

  const handleHotelSelect = (hotel) => {
    onHotelSelect(hotel);
    // You may fetch rooms for the selected hotel from the backend here
  };

  return (
    <ul>
      {hotels.map(hotel => (
        <li key={hotel.id} onClick={() => handleHotelSelect(hotel)}>
          <strong>{hotel.name}</strong> - {hotel.location}
        </li>
      ))}
    </ul>
  );
}

export default HotelList;
