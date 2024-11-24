import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [userId, setUserId] = useState();
    const [profile, setProfile] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Log the userId to ensure it is correctly set
        console.log("User ID:", userId);

        if (!userId) {
            console.error("User ID is required");
            return;
        }

        axios.post('http://localhost:3000/auth/profile', { userId })
            .then(result => {
                if (result.data.Status) {
                    setProfile(result.data.Result);
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
                        type="text" 
                        name='user_id' 
                        autoComplete='off' 
                        placeholder='Enter ID'
                        onChange={(e) => setUserId(e.target.value)} 
                        className='form-control rounded-0' 
                    required/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-3' type='submit'>Show Profile</button>
            </form>
            <div className='d-flex justify-content-center'>
                <h3>Your Profile</h3>
            </div>
            <Link to="/dashboard2/register" className='btn btn-success'>Go to registration</Link>
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {profile.map(profile => (
                            <tr key={profile.id}>
                                <td>{profile.id}</td>
                                <td>{profile.Username}</td>
                                <td>{profile.email}</td>
                                <td>{profile.user_type}</td>    
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;
