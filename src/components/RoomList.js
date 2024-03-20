import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RoomList({ hotelId }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get(`/api/hotels/${hotelId}/rooms`)
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => {
        console.error('Error fetching rooms:', error);
      });
  }, [hotelId]);

  return (
    <div>
      <h2>Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>{room.room_type}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
