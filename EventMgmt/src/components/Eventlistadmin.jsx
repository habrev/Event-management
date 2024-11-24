import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Eventlist = () => {
    const navigate =useNavigate()
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/auth/event_list')
            .then(result => {
                if (result.data.Status) {
                    setEvents(result.data.Result);
                } else {
                    console.error(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='px-5 mt-3'>
            <div className='d-flex justify-content-center'>
                <h3>Event List</h3>
            </div>
            <Link to="/dashboard/deleteevent" className='btn btn-success'>Delete Event</Link>
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

export default Eventlist;
