import React, { useState } from 'react';
import './ClientForm.css';

const ClientForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        number: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const formData = {
          name: event.target.name.value,
          email: event.target.email.value,
          message: event.target.message.value,
          number: event.target.number.value,
        };
      
        try {
          const response = await fetch('https://web-application-qive.vercel.app/ClientForm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const result = await response.json();
          console.log('Form submitted successfully:', result);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
    
    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Number</label>
                    <input
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default ClientForm;