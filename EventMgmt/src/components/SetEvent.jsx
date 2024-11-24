import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SetEvent = () => {
  const [eventname, setEventname]=useState('')
  const [eventdate,setEventdate]=useState('')
  const [eventlocation, setEventlocation]=useState('')
  const [eventtype, setEventtype]=useState('')
  const [venue_id, setVenueid]=useState('')
  const [price, setPrice]=useState('')
  const [event_id, setEventid]=useState('')
  const navigate=useNavigate()
  const handleSubmit=(e) => {
    e.preventDefault();
    const event = { event_id, eventname, eventdate, eventlocation, eventtype, venue_id, price };
    axios.post('http://localhost:3000/auth/add_event', event)
    .then(result=> {
      if(result.data.Status){
          alert(" event table populated ")
          navigate('/dashboard/organizer')
          
      }else {
          alert(result.data.Error)
      }
    })
    .catch(err => console.log(err))

  }
  return (
    <div> <h3>Hello admin, You can set events here </h3>
    <div className='d-flex justify-content-center align-items-center  vh-100  '>
    <div className='p-3 rounded w-25 border align-items-center   '>
       
        <form onSubmit={handleSubmit}>
        <div className='mb-3'>
        <label htmlFor="event_id"><strong>Event Id:</strong></label>
        <input type="number" name='eventname' autoComplete='off' placeholder='Enter Id'
        onChange={(e)=> setEventid( e.target.value)} className='form-control rounded-0' required/>
        </div>
            <div className='mb-3'>
                <label htmlFor="eventname"><strong>Event Name:</strong></label>
                <input type="text" name='eventname' autoComplete='off' placeholder='Enter Event Name'
                onChange={(e)=> setEventname( e.target.value)} className='form-control rounded-0' required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="eventdate"><strong>Event Holding Date:</strong></label>
                <input type="date" name='eventdate' placeholder='Enter Event Holding date'
                onChange={(e)=> setEventdate(e.target.value)} className='form-control rounded-0' required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="eventlocation"><strong>Event Location:</strong></label>
                <input type="text" name='eventlocation' autoComplete='off' placeholder='Enter Event Location'
                onChange={(e)=> setEventlocation( e.target.value)} className='form-control rounded-0' required/>
                </div>
            <div className='mb-3'>
                <label htmlFor="eventtype"><strong>Event Type:</strong></label>
                <input type="text" name='eventtype' placeholder='Enter Event Type'
                onChange={(e)=> setEventtype(e.target.value)} className='form-control rounded-0' required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="venue_id"><strong>Event Venue Id:</strong></label>
                <input type="number" name='venue_id' placeholder='Enter Venue Id'
                onChange={(e)=> setVenueid(e.target.value)} className='form-control rounded-0' required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="registration price "><strong>Registration Price:</strong></label>
                <input type="number" name='eventtype' placeholder='Enter Ticket Price'
                onChange={(e)=> setPrice(e.target.value)} className='form-control rounded-0' required/>
            </div>
            <button classname=' btn1 btn1-success w-100 rounded-0 mb-3'> Submit </button>
            </form>
            </div>
            </div>
            </div>

  )
}

export default SetEvent