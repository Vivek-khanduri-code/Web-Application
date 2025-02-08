import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'We build responsive and scalable websites.' },
    { title: 'UI/UX Design', description: 'We design user-friendly interfaces.' },
    { title: 'Digital Marketing', description: 'We help you reach your audience.' },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;