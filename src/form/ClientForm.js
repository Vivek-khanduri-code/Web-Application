import React, { useState } from 'react';
import { put } from '@vercel/blob';

const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });

const ClientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000//https://your-vercel-backend.vercel.app/api/endpoint/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log('Response from backend:', result);
  
      if (response.ok) {
        alert('Thank you for contacting us!');
        setFormData({ name: '', email: '', message: '',number:'' });
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong!');
    }
  };
  
  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <textarea name="number" value={formData.number} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ClientForm;
