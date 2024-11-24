import React from 'react';

const Startupr = () => {
  const containerStyle = {
    // padding: '1rem',
    //margin: 'auto',
    Width: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const sectionStyle = {
    margin: '2rem 0',
    width: '50%',
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '10px',
  };
  
  const sctionStyle = {
    textAlign: 'center',
        marginTop: '3rem', 
        fontSize: '2rem', 
        color: '#333', 
        backgroundColor: '#167AA5',
        // position: 'absolute',
        left: 0,
        bottom:0, 
        width: '100%',
        padding: '1rem',
        color: '#fff'
  };

  const headingStyle = {
    textAlign: 'center',
    
  };

  const buttonStyle = {
    display: 'block',
    margin: '1rem auto',
    padding: '0.5rem 1rem',
    backgroundColor: '#167AA5',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const sectionStyle1 = {
    margin: '2rem 0',
    width: '50%',
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '1',
    backgroundColor: '#167AA5',
    color: '#fff',

  }

  return (
    <div style={containerStyle}>
      <div style={sectionStyle1}>
      </div>
      <div style={sctionStyle}>
        <img src="/images/startup.jpg" alt="startup" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <button style={buttonStyle}>Buy Ticket</button>
      </div>

      <div style={sectionStyle}>
        <h1>overview</h1>
        <p>Startup Event is a dynamic gathering designed for entrepreneurs, investors, and industry professionals looking to foster innovation, share knowledge, and explore new business opportunities. These events provide a platform for startups to showcase their ideas, connect with potential investors, and gain valuable insights from experienced business leaders.</p>
        <p>This event is organized by NEXUS Events, a renowned event management company known for orchestrating high-profile business and corporate events globally. NEXUS Events has a proven track record of delivering meticulously planned and executed events that offer immense value to attendees.</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Event Highlights</h2>
        <ul>
          <li>Pitch Sessions: Startups present their business ideas to a panel of investors and industry experts. These sessions are designed to provide constructive feedback and potential funding opportunities.</li>
          <li>Workshops and Seminars: Interactive workshops and educational seminars cover essential topics such as fundraising, marketing strategies, product development, and scaling a business.</li>
          <li>Networking Opportunities: Dedicated networking sessions provide a space for entrepreneurs to connect with investors, mentors, and other startups. These interactions can lead to collaborations, partnerships, and new business ventures.</li>
          <li>Exhibition Area: Startups can showcase their products and services, allowing attendees to experience the latest innovations firsthand.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Why Attend?</h2>
        <ul>
          <li>Learning and Development: Gain practical knowledge from experienced entrepreneurs and industry leaders.</li>
          <li>Investment Opportunities: Present your startup to potential investors and secure funding.</li>
          <li>Networking: Build meaningful connections with other startups, mentors, and investors.</li>
          <li>Exposure: Increase visibility for your startup and attract potential customers and partners.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>WHERE</h2>
        <p>SCIENE MUSEUM,4 KILO</p>
        <p>2QC7+F9C Science Museum Entrance ሳይንስ ሙዝየም መግቢያ, 15, 16, Addis Ababa</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>WHEN</h2>
        <p>01 Nov 2025 08:00 PM (UTC) - 31 Dec 2025 10:50 PM (UTC)</p>
      </div>

      <footer style={sctionStyle}>
        <p>Thanks for booking</p>
        <p>Made by NEXUS Groups</p>
        <p>&copy; 2024 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Startupr;
