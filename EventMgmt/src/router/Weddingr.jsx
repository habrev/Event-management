import React from 'react';

const Weddingr = () => {
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
        <img src="/images/wedding.jpg" alt="devfest" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <button style={buttonStyle}>Buy Ticket</button>
      </div>

      <div style={sectionStyle}>
        <h1>overview</h1>
        <p>Wedding Event is a celebration of love and commitment, bringing together family and friends to witness and partake in the joyous union of two individuals. These events are meticulously planned to ensure every detail contributes to a memorable and magical experience for the couple and their guests.</p>
        <p>This event is organized by NEXUS Events, a renowned event management company known for orchestrating high-profile business and corporate events globally. NEXUS Events has a proven track record of delivering meticulously planned and executed events that offer immense value to attendees.</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Event Highlights</h2>
        <ul>
          <li>Beautiful Venues: Choose from a selection of stunning venues that can be tailored to fit the couple's vision, whether it's a grand ballroom, a serene garden, or a charming rustic setting.</li>
          <li>Customized Decor: Expert designers work with the couple to create personalized decor that captures their theme and aesthetic, ensuring every detail is perfect.</li>
          <li>Gourmet Catering: Delight guests with a curated menu featuring gourmet dishes and signature cocktails, crafted by top chefs to suit a variety of tastes.</li>
          <li>Entertainment: Enjoy live music, DJs, and performances that keep the celebration lively and engaging. Options include bands, solo artists, and cultural performances.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Why Attend?</h2>
        <ul>
          <li>Memorable Experience: Witness the beautiful union of the couple in a meticulously planned and executed ceremony.</li>
          <li>Elegant Atmosphere: Enjoy a sophisticated and festive atmosphere created by professional event planners.</li>
          <li>CDelicious Cuisine: Savor a variety of gourmet dishes and beverages that cater to diverse palates.</li>
          <li>Entertainment: Experience high-quality entertainment that keeps the celebration vibrant and enjoyable.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>WHERE</h2>
        <p>hilton hotel</p>
        <p>Hilton Addis Ababa, Menelik II Ave, Addis Ababa 1164</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>WHEN</h2>
        <p>01 Nov 2025 08:00 PM (UTC) - 3 Dec 2025 10:50 PM (UTC)</p>
      </div>

      <footer style={sctionStyle}>
        <p>Thanks for booking</p>
        <p>Made by NEXUS Groups</p>
        <p>&copy; 2024 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Weddingr;
