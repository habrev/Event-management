import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/auth/user_list')
            .then(result => {
                if (result.data.Status) {
                    console.log("Fetched Users:", result.data.Result); 
                    setUsers(result.data.Result);
                } else {
                    console.error(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='px-5 mt-3'>
            <div className='d-flex justify-content-center'>
                <h3>User List</h3>
            </div>
            <Link to="/dashboard/deleteuser" className='btn btn-success'>Delete user</Link>
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>USER ID</th>
                            <th>USER Name</th>
                            <th>USER EMAIL</th>
                            <th>USER PASSWORD</th>
                            <th>USER Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.Username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.user_type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User;
