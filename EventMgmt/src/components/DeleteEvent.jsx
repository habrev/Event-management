import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteEvent = () => {
    const [deleteId, setDeleteId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/delete_event', { deleteId }) 
            .then(result => {
                if (result.data.Status) {
                    alert(result.data.msg);
                    navigate('/dashboard/eventlistadmin');
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="delete_id"><strong>ID of the Event to be deleted:</strong></label>
                <input type="text" name='delete_id' autoComplete='off' placeholder='Enter Event ID'
                    onChange={(e) => setDeleteId(e.target.value)} className='form-control rounded-0' required/>
            </div>
            <button className='btn btn-success w-100 rounded-0 mb-3' type='submit'>Delete Event</button>
        </form>
    )
}

export default DeleteEvent;
