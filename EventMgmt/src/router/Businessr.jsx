import React from 'react';
import { useNavigate } from 'react-router-dom';


const Businessr = () => {
  const containerStyle = {
    // padding: '1rem',
    //margin: 'auto',
    Width: '100%',
    padding: '1rem',
    boxsizing: 'border-box',
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
    boxsizing: 'border-box',
  };
  
  const sctionStyle = {
        textAlign: 'center',
        marginTop: '3rem', 
        fontSize: '2rem', 
        backgroundColor: '#167AA5',
        // position: 'absolute',
        left: 0,
        bottom:0, 
        width: '100%',
        padding: '1rem',
        position: 'relative',
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
    borderRadius: '10px',
    backgroundColor: '#167AA5',
    color: '#fff',
    boxsizing: 'border-box',

  }

  return (
    <div style={containerStyle}>
      <div style={sectionStyle1}>
        
      </div>
      <div style={sctionStyle}>
        <img src="/images/business.jpg" alt="Business Event" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        
        <button style={buttonStyle} >Buy Ticket</button>
      </div>

      <div style={sectionStyle}>
        <p>The Business Meeting event is one of the premier gatherings designed for professionals across various industries. This event aims to foster networking, knowledge sharing, and collaboration among business leaders, entrepreneurs, and professionals.</p>
        <p>This event is organized by NEXUS Events, a renowned event management company known for orchestrating high-profile business and corporate events globally. NEXUS Events has a proven track record of delivering meticulously planned and executed events that offer immense value to attendees.</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Event Highlights</h2>
        <ul>
          <li>Keynote Speakers: The event will feature keynote speeches from industry leaders and influential speakers who will share their insights and experiences.</li>
          <li>Workshops and Panels: Interactive workshops and panel discussions will cover a range of topics from innovation and technology to leadership and strategic growth.</li>
          <li>Networking Opportunities: Dedicated networking sessions designed to connect attendees with potential partners, investors, and collaborators.</li>
          <li>Exhibition Area: Showcase of the latest products, services, and technologies from leading companies.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Why Attend?</h2>
        <ul>
          <li>Learning: Gain valuable knowledge from expert speakers and panelists.</li>
          <li>Networking: Build meaningful connections with other professionals and industry leaders.</li>
          <li>Exposure: Explore new trends, tools, and technologies that can benefit your business.</li>
          <li>Growth: Discover opportunities for business growth and development.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>WHERE</h2>
        <p>Commerce Campus, Addis Ababa University</p>
        <p>2P7X+5QV Addis Ababa University School of Commerce, Ras Abebe Aregai, Addis Ababa 1555</p>
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

export default Businessr;
