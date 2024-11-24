import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const feedbacklist = () => {
    const navigate =useNavigate()
    const [feeds, setfeeds] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/auth/feed_list')
            .then(result => {
                if (result.data.Status) {
                    setfeeds(result.data.Result);
                } else {
                    console.error(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='px-5 mt-3'>
            <div className='d-flex justify-content-center'>
                <h3>User Feedback List</h3>
            </div>
            
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Feedback ID</th>
                            <th>Event ID</th>
                            <th>Feedback Text</th>
                            <th>Feedback Rating</th>
                            <th>Attendee ID</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {feeds.map(feedback => (
                            <tr key={feedback.feedback_id}>
                                <td>{feedback.feedback_id}</td>
                                <td>{feedback.event_id}</td>
                                <td>{feedback.feedback_text}</td>
                                <td>{feedback.feedback_rating}</td>
                                <td>{feedback.attendee_id}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default feedbacklist;
