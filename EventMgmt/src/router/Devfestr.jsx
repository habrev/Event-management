import React from 'react';

const Devfester = () => {
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
        <img src="/images/devfest.jpg" alt="devfest" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <button style={buttonStyle}>Buy Ticket</button>
      </div>

      <div style={sectionStyle}>
        <h1>overview</h1>
        <p>TDevFest (Developer Festival) is a series of community-run events that can be organized by Google Developer Groups (GDG) around the globe. Each DevFest event is inspired by and uniquely tailored to the needs of the developer community that hosts it. Whether it's hands-on learning via workshops, talks delivered by local and international experts, or just meeting fellow local developers, DevFests cover a wide range of technical topics and include a variety of sessions.</p>
        <p>This event is organized by NEXUS Events, a renowned event management company known for orchestrating high-profile business and corporate events globally. NEXUS Events has a proven track record of delivering meticulously planned and executed events that offer immense value to attendees.</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Event Highlights</h2>
        <ul>
          <li>Keynote Speakers: Hear from prominent figures in the tech industry and get insights into the latest trends and technologies.</li>
          <li>Workshops and Code Labs: Participate in hands-on sessions where you can learn new skills and apply them to real-world problems.</li>
          <li>Tech Talks: Engage in deep-dive sessions on various topics, from web development and cloud computing to artificial intelligence and machine learning.</li>
          <li>Hackathon: Participate in a competitive hackathon, where you can showcase your skills, learn from others, and possibly win exciting prizes.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Why Attend?</h2>
        <ul>
          <li>Learning Opportunities: Expand your knowledge and stay up-to-date with the latest in technology.</li>
          <li>Community Engagement: Meet and interact with like-minded individuals who share your passion for technology.</li>
          <li>Career Growth: Gain valuable skills and insights that can enhance your career prospects.</li>
          <li>Fun and Inspiration: Be inspired by success stories, innovative projects, and the vibrant energy of the tech community.</li>
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

export default Devfester;
