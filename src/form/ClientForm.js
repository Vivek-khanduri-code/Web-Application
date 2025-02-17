import React, { useState } from 'react';
import './ClientForm.css';

const ClientForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '', // Added number field
        message: '',
        // Removed summary field as it's not used in the form
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('mongodb+srv://vercel-admin-user:Wexr-3223@clustere.bbprk.mongodb.net/DB_UNIQUE_FROM?retryWrites=true&w=majority', {
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
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Phone No:</label>
                    <input
                        type="tel" // Changed to tel for phone number
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className='submit-form'>Submit</button>
            </form>
        </div>
    );
};

export default ClientForm;