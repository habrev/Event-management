import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {
    const [userId, setUserId] = useState('');
    const [events, setEvents] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/attendee_event_list', { userId })
            .then(result => {
                if (result.data.Status) {
                    setEvents(result.data.Result);
                } else {
                    console.error(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='px-5 mt-3'>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="user_id"><strong>Enter Your ID:</strong></label>
                    <input 
                        type="number" 
                        name='user_id' 
                        autoComplete='off' 
                        placeholder='Enter ID'
                        onChange={(e) => setUserId(e.target.value)} 
                        className='form-control rounded-0' 
                    required/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-3' type='submit'>Show Events</button>
            </form>
            <div className='d-flex justify-content-center'>
                <h3>You Have Registered for the Following Events</h3>
            </div>
            <Link to="/dashboard2/register" className='btn btn-success'>Register for More Events</Link>
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Event ID</th>
                            <th>Event Name</th>
                            <th>Event Date</th>
                            <th>Event Location</th>
                            <th>Event Type</th>
                            <th>Event Price</th>
                            <th>Venue ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event => (
                            <tr key={event.event_id}>
                                <td>{event.event_id}</td>
                                <td>{event.event_name}</td>
                                <td>{event.event_date}</td>
                                <td>{event.event_location}</td>
                                <td>{event.event_type}</td>
                                <td>{event.registration_price}</td>
                                <td>{event.venue_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EventList;
