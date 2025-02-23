import React, { useState } from 'react';
import './ClientForm.css';

const ClientForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://web-application-give-stavepgny-vivek-kumar-s-projects-cf48244c.vercel.app/api/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setSuccess(result.message); // Reset form
      setFormData({ name: '', email: '', number: '', message: '' });
    } catch (err) {
      setError('Error submitting form: ' + err.message);
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      {success && <p className="success">{success}</p>}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="client-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="form-input"
        />
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Your Phone Number"
          required
          className="form-input"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="form-input message"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ClientForm;