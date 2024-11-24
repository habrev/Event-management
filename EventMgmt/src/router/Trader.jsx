import React from 'react';

const Trader = () => {
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
        <img src="/images/trade.jpg" alt="music" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <button style={buttonStyle}>Buy Ticket</button>
      </div>

      <div style={sectionStyle}>
        <h1>overview</h1>
        <p>The Trade Event is a premier gathering that brings together business professionals, entrepreneurs, investors, and industry leaders to explore new business opportunities, showcase products, and expand networks. This event provides a unique platform for attendees to engage in meaningful discussions, forge partnerships, and gain insights into the latest industry trends.</p>
        <p>This event is organized by NEXUS Events, a renowned event management company known for orchestrating high-profile business and corporate events globally. NEXUS Events has a proven track record of delivering meticulously planned and executed events that offer immense value to attendees.</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Event Highlights</h2>
        <ul>
          <li>Exhibition Area: Showcasing a wide range of products and services from various industries. Attendees can explore the latest innovations and trends.</li>
          <li>Networking Sessions: Dedicated networking sessions designed to connect attendees with potential partners, investors, and collaborators.</li>
          <li>Workshops: Interactive workshops covering essential topics such as trade regulations, market entry strategies, and business development.</li>
          <li>Panel Discussions: Engaging discussions with industry experts on current market trends, challenges, and opportunities.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Why Attend?</h2>
        <ul>
          <li>Business Opportunities: Discover new markets and opportunities for business expansion.</li>
          <li>Networking: Build valuable connections with industry professionals and potential partners.</li>
          <li>Knowledge Sharing: Gain insights from expert speakers and panelists.</li>
          <li>Exposure: Increase visibility for your business and explore the latest products and services</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>WHERE</h2>
        <p>MILLINIUM HALL </p>
        <p>XQRQ+4R7, Addis Ababa</p>
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

export default Trader;
