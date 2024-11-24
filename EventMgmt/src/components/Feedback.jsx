import React from 'react'
import axios from 'axios'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Vendor = () => {
       
        const [attendee_id,setAttendeeid]=useState('')
        const [feedback_text, setFeedbacktxt]=useState('')
        const [event_id,setEventid]=useState('')
        const [feedback_rating,setRating]=useState('')
        
    const handleSubmit=(e) => {
        e.preventDefault();
        const eventfed = { feedback_rating, attendee_id, feedback_text, event_id};
        axios.post('http://localhost:3000/auth/add_feedback', eventfed)
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
    <div> <h3>Hello admin, You can register vendors for your the event here </h3>
      <div className='d-flex justify-content-center align-items-center  vh-100  '>
      <div className='p-3 rounded w-25 border align-items-center   '>
    <form onSubmit={handleSubmit}>
      
    
    <div className='mb-3'>
        <label htmlFor="attendee_id"><strong> Your ID :</strong></label>
        <input type="text" name='attendee_id' placeholder='Enter Your ID'
        onChange={(e)=> setAttendeeid(e.target.value)} className='form-control rounded-0' required/>
    </div>
    <div className='mb-3'>
        <label htmlFor="feedback_text"><strong> Your Feed back here:</strong></label>
        <input type="text" name='feedback_text' autoComplete='off' placeholder='Enter Your Feedback '
        onChange={(e)=> setFeedbacktxt( e.target.value)} className='form-control rounded-0' required/>
        </div>
     <div className='mb-3'>
        <label htmlFor="feedback_rating"><strong>Event Rating 0 upto 10:</strong></label>
        <input type="number" min="0" max="10" name='feedback_rating' autoComplete='off' placeholder='Enter Rating'
        onChange={(e)=> setRating( e.target.value)} className='form-control rounded-0' required/>
        </div>
        <div className='mb-3'>
        <label htmlFor="event_id"><strong> Event Id:</strong></label>
        <input type="number"  name='event_id' autoComplete='off' placeholder='Enter Event ID'
        onChange={(e)=> setEventid( e.target.value)} className='form-control rounded-0' required/>
         <button classname=' btn1 btn1-success w-100 rounded-0 mb-3'> Submit </button>
        </div>
        </form>
        </div>
        </div>
        </div>
  )
}

export default Vendor