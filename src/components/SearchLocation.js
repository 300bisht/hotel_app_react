import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchLocation = ({ setLocation }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await axios.get('/api/locations');
      setLocations(response.data);
    };

    fetchLocations();
  }, []);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <select onChange={handleLocationChange}>
        <option value="">Select Location</option>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchLocation;