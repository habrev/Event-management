import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteUsers = () => {
    const [deleteId, setDeleteId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/delete_user', { deleteId }) // Send as an object
            .then(result => {
                if (result.data.Status) {
                    alert(result.data.msg);
                    navigate('/dashboard/users');
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="delete_id"><strong>ID of the User to be deleted:</strong></label>
                <input type="text" name='delete_id' autoComplete='off' placeholder='Enter ID'
                    onChange={(e) => setDeleteId(e.target.value)} className='form-control rounded-0' required />
            </div>
            <button className='btn btn-success w-100 rounded-0 mb-3' type='submit'>Delete user</button>
        </form>
    )
}

export default DeleteUsers;
