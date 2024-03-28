import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditBookingForm = ({ }) => {
  const { bookingId } = useParams();

  const [formData, setFormData] = useState({
    check_in_date: '',
    check_out_date: ''
  });


  useEffect(() => {
    fetchBooking();
  }, [bookingId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const fetchBooking = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/bookings/${bookingId}/edit`);
      const bookingData = response.data;
      setFormData({
        check_in_date: bookingData.check_in_date,
        check_out_date: bookingData.check_out_date
      });
    } catch (error) {
      console.error('Error fetching booking:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    try {
      await axios.put(`http://localhost:4000/bookings/${bookingId}`, {booking: formData});
      alert('Booking updated successfully');
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };


  return (

    <div className="booking-form">
      <h2>Edit Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="check_in_date" className="form-label">Check-in Date</label>
          <input type="date" className="form-control" id="check_in_date" name="check_in_date" value={formData.check_in_date} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="check_out_date" className="form-label">Check-out Date</label>
          <input type="date" className="form-control" id="check_out_date" name="check_out_date" value={formData.check_out_date} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Update Booking</button>
      </form>
    </div>
  );
};

export default EditBookingForm;
