import React from 'react';

const Musicr = () => {
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
        <img src="/images/music.jpg" alt="music" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <button style={buttonStyle}>Buy Ticket</button>
      </div>

      <div style={sectionStyle}>
        <h1>overview</h1>
        <p>Music Concert events bring together music lovers and performers to create unforgettable experiences. These concerts feature a wide array of genres and artists, offering something for everyone. From classical symphonies to contemporary pop and rock performances, music concerts celebrate the art of music in its many forms.</p>
        <p>This event is organized by NEXUS Events, a renowned event management company known for orchestrating high-profile business and corporate events globally. NEXUS Events has a proven track record of delivering meticulously planned and executed events that offer immense value to attendees.</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Event Highlights</h2>
        <ul>
          <li>Live Performances: Enjoy live performances from renowned artists and bands across various music genres.</li>
          <li>Special Guest Appearances: Surprise performances and guest appearances by famous musicians and celebrities.</li>
          <li>State-of-the-Art Sound and Lighting: Experience the music in its full glory with cutting-edge sound systems and spectacular lighting effects.</li>
          <li>Interactive Sessions: Engage with artists through Q&A sessions, meet-and-greets, and autograph signings.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Why Attend?</h2>
        <ul>
          <li>Unforgettable Experience: Witness live performances that create lasting memories.</li>
          <li>Diverse Music: Explore different genres and discover new favorite artists.</li>
          <li>Community Engagement: Meet and connect with fellow music enthusiasts.</li>
          <li>Support Artists: Show your support for artists by attending their live performances.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>WHERE</h2>
        <p>AAiT, Addis Ababa University</p>
        <p>2QR7+C7P AAIT Library, King George VI St, Addis Ababa 1000</p>
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

export default Musicr;
