import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
        const [attendee_name, setAttendeename]=useState('')
        const [attendee_id, setAttendeeid]=useState('')
        const [attendee_email,setAttendeeemail]=useState('')
        const [attendee_phone, setAttendeephone]=useState('')
        const [event_id,setEventid]=useState('')       
        const navigate=useNavigate()
    const handleSubmit=(e) => {
        e.preventDefault();
        const eventregistry = { attendee_id, attendee_name, attendee_email, attendee_phone, event_id};
        axios.post('http://localhost:3000/auth/add_atende', eventregistry)
        .then(result=> {
          if(result.data.Status){
              alert(result.data.msg)
              

              
          }else {
              alert(result.data.Error)
          }
        })
        .catch(err => console.log(err))

    }
 return (
    <div> <h3>Hello User, You can register for  events here </h3>
    <div className='d-flex justify-content-center align-items-center  vh-100  '>
    <div className='p-3 rounded w-25 border align-items-center   '>
  <form onSubmit={handleSubmit}>
    
  <div className='mb-3'>
      <label htmlFor="attendee_name"><strong>Attendee Name:</strong></label>
      <input type="text" name='attendee_name' autoComplete='off' placeholder='Enter Attendee Name'
      onChange={(e)=> setAttendeename( e.target.value)} className='form-control rounded-0'required/>
  </div>
  <div className='mb-3'>
      <label htmlFor="attendee_email"><strong>Attendee Email:</strong></label>
      <input type="email" name='attendee_email' placeholder='Enter Attendee Email'
      onChange={(e)=> setAttendeeemail(e.target.value)} className='form-control rounded-0' required/>
  </div>
  <div className='mb-3'>
      <label htmlFor="attendee_phone"><strong>Attendee Phone:</strong></label>
      <input type="tel" name='attendee_phone' autoComplete='off' placeholder='Enter Attendee Phonenumber '
      onChange={(e)=> setAttendeephone( e.target.value)} className='form-control rounded-0' required/>
      </div>
      <div className='mb-3'>
      <label htmlFor="attendee_id"><strong>Attendee Id:</strong></label>
      <input type="tel" name='attendee_phone' autoComplete='off' placeholder='Enter Attendee ID '
      onChange={(e)=> setAttendeeid( e.target.value)} className='form-control rounded-0' required/>
      </div>
   
      <div className='mb-3'>
      <label htmlFor="event_id"><strong> Event Id:</strong></label>
      <input type="number" name='event_id' autoComplete='off' placeholder='Enter Event ID'
      onChange={(e)=> setEventid( e.target.value)} className='form-control rounded-0' required/>
      
       <button classname=' btn1 btn1-success w-100 rounded-0 mb-3'> Submit </button>
      </div>
      </form>
      </div>
      </div>
      </div>
  )
}

export default Register