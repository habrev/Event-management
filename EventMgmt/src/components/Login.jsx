import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/adminlogin', values, { withCredentials: true })
            .then(result => {
                if (result.data.loginStatus) {
                    if (result.data.isAdmin) {
                        navigate('/dashboard');
                    } else {
                        navigate('/dashboard2');
                    }
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => {
                setError('Something went wrong. Please try again.');
                console.log(err);
            });
    }

    return (
        <div>
            <h1>Login Page</h1>
            <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
                <div className='p-3 rounded w-25 border align-items-center loginForm'>
                    <div className='text-danger'>
                        {error && error}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="email"><strong>Email:</strong></label>
                            <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                                onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password"><strong>Password:</strong></label>
                            <input type="password" name='password' placeholder='Enter Password'
                                onChange={(e) => setValues({ ...values, password: e.target.value })} className='form-control rounded-0' required/>
                        </div>
                        <button className='btn btn-success w-100 rounded-0 mb-3'>Submit</button>
                        <label htmlFor=''>Don't have an account?</label>
                        <button type='button' className='btn btn-success w-100 rounded-0 mb-3' onClick={() => navigate('signup')}>Sign up</button>
                    </form>
                </div>
            </div>
            <div>
                <button className='btn btn-clicked w-100 rounded-0'>About Us</button>
            </div>
        </div>
    )
}

export default Login;
