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
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log("Form Data Before Sending:", formData); // Add this line
    
        try {
            const response = await fetch('http://localhost:5000/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
            console.log("Response from backend:", result);
            
            if (response.ok) {
                alert('Thank you for contacting us!');
                setFormData({ name: '', email: '', message: '',number:'' }); // Reset form
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