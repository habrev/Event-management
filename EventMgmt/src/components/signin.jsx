import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [checkboxChecked, setCheckboxChecked] = useState(false);
   const [username, setUsername]=useState('')
   const [email,setEmail]=useState('')
   const [password, setPassword]=useState('')
   const [Error,setError]=useState()
   const navigate=useNavigate()
   const handleSubmit=(e) => {
   
    e.preventDefault();
    if (!checkboxChecked) {
        setError("You must agree to the terms and conditions in order to use this site.");
        alert(Error)
        return;
    }
    const user = { username, email, password };
    
    axios.post('http://localhost:3000/auth/add_user', user)
    .then(result=> {
        if(result.data.Status){
            alert(" signed in successfully")
            navigate('/adminlogin')
        }else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
   }
  return (
    <div> <h1> User Sign In Page </h1>
    
    
    
    <div className='d-flex justify-content-center align-items-center  vh-100 loginPage '>
        <div className='p-3 rounded w-25 border align-items-center  loginForm '>
            <form onSubmit={handleSubmit} >
            <div className='mb-3'>
                    <label htmlFor="name"><strong>User Name:</strong></label>
                    <input type="text" name='name' autoComplete='off' placeholder='Enter User Name'
                     onChange={(e)=> setUsername( e.target.value)} className='form-control rounded-0' required/>
                </div>
        
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                   onChange={(e)=> setEmail(e.target.value)}  className='form-control rounded-0' required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type="password" name='password' placeholder='Enter Password'
                   onChange={(e)=> setPassword( e.target.value)}  className='form-control rounded-0' required/>
                </div>
                <div className='mb-3'>
                            <input type="checkbox" id="terms" checked={checkboxChecked}
                                onChange={(e) => setCheckboxChecked(e.target.checked)} />
                            <label htmlFor="terms">    I agree to the terms and conditions</label>
                        </div>
                <button classname=' btn3 btn3-success w-100 rounded-0 mb-3'> Sign Up </button>
            </form>
        </div>
    </div>
    <div>
        
    </div>
    </div>
     
  )
}

export default SignIn