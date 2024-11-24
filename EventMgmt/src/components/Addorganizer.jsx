import React from 'react'
import axios from 'axios'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SetEvent from './SetEvent'

const Addorganizer = () => {
    const [organizer_name, setOrganizername]=useState('')
    const [organizer_email,setOrganizeremail]=useState('')
    const [organizer_phone, setOrganizerphone]=useState('')
    const [event_id,setEventid]=useState('')
    const [organizer_id,setOrganizer_id]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e) => {
        e.preventDefault();
        const eventorg = { organizer_id, event_id, organizer_name, organizer_email, organizer_phone};
        axios.post('http://localhost:3000/auth/add_org', eventorg)
        .then(result=> {
          if(result.data.Status){
              alert(result.data.msg)
              navigate('/dashboard/vendor')
          }else {
              alert(result.data.Error)
          }
        })
        .catch(err => console.log(err))

    }
  return (
    <div> <h3>Hello admin, You can set Organizers for your the event here </h3>
      <div className='d-flex justify-content-center align-items-center  vh-100  '>
      <div className='p-3 rounded w-25 border align-items-center   '>
    <form onSubmit={handleSubmit}>
      
    <div className='mb-3'>
        <label htmlFor="organizer_name"><strong>Organizer Name:</strong></label>
        <input type="text" name='organizer_name' autoComplete='off' placeholder='Enter organizer Name'
        onChange={(e)=> setOrganizername( e.target.value)} className='form-control rounded-0'required/>
    </div>
    <div className='mb-3'>
        <label htmlFor="organizer_email"><strong>Organizer Email:</strong></label>
        <input type="email" name='organizer_email' placeholder='Enter Organizer Email'
        onChange={(e)=> setOrganizeremail(e.target.value)} className='form-control rounded-0' required/>
    </div>
    <div className='mb-3'>
        <label htmlFor="organizer_phone"><strong>Organizer Phone:</strong></label>
        <input type="tel" name='organizer_phone' autoComplete='off' placeholder='Enter Organizer Phone '
        onChange={(e)=> setOrganizerphone( e.target.value)} className='form-control rounded-0' required/>
        </div>
    <div className='mb-3'>
        <label htmlFor="event_id"><strong>Event Id:</strong></label>
        <input type="text" name='eventname' autoComplete='off' placeholder='Enter Id'
        onChange={(e)=> setEventid( e.target.value)} className='form-control rounded-0' required/>
        </div>
        <div className='mb-3'>
        <label htmlFor="organizer_id"><strong>Organizer Id:</strong></label>
        <input type="number" name='organizer_id' autoComplete='off' placeholder='Enter Organizer ID'
        onChange={(e)=> setOrganizer_id( e.target.value)} className='form-control rounded-0' required/>
        </div>
    
    <button classname=' btn1 btn1-success w-100 rounded-0 mb-3'> Submit </button>
    </form>
    </div>
    </div>
    </div>
   
  
  
  )
}
  


export default Addorganizer