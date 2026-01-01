import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../config/api';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${BASE_URL}/api/submit-form`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.data.success) {
        // Redirect to catalogue page on successful submission
        navigate('/catalogue');
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src="/heritagelogo1.png" alt="Heritage Lane & Co" className="mx-auto" />
      </div>
      <h1 className="text-center text-gray-800 mb-8 font-playfair font-semibold">User Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            placeholder="Enter your mobile number"
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button 
          type="submit" 
          className="submit-btn hover:bg-blue-700 transition-colors duration-200"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FormPage;