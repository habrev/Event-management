import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
import './homecopy.css'
import homeimg from '../Assets/homeimg.jpg'
import event1 from '../Assets/event1.jpg'; 
import event2 from '../Assets/event2.jpg'; 
import event3 from '../Assets/event3.jpg'; 
import { Button } from 'bootstrap'
import axios from 'axios';

  

const Homepg = () => {
  const [events, setEvents] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/auth/home_test')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error("Error fetching events:", error);
      });
  }, []);

    return (

      <div className='justify-content-center align-items-center box-sizing-boarder-box width-50%'>
      <div className='navbar'>
        <div className="nav-right">
          <span className="nav-title">Nexus Events</span>
        </div>
      
        <div className="nav-left">
          <Link to="/dashboard2/profile">User</Link>
          
          
          <Link to="/property">EVENTS</Link>
        </div>
      </div>

      <div className='homeimg'>
      <img src={homeimg} alt="Home"/>
      </div>

      
      <div className='header'>
        <h2>Upcoming Events</h2>
        {/* <Button  className='view-all'>View All</Button> */}
      </div>

      <div className='events-list'>

        {events.length > 0 ? (
          events.map(event => (
            <div className='event-card'>
            <div className='event-date' >{event.event_date} </div>
      <img src={event1} className='event-image' />
      <div className='event-info'> 
            <h3>{event.event_name}</h3>
            <p>{event.event_type}</p>
            <p className='location' ><span className='location-icon'></span>Location: {event.event_location}</p>
            <p >Price: {event.registration_price}</p>
        </div>    
        </div> 
       ))
        ) : (
          <p>Loading events...</p>
        )}

      </div>
      </div>
  
    );
  };

  export default Homepg;
