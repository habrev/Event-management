import React from 'react'
import axios from 'axios'
import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Sponsor = () => {
    const [sponsor_name, setSponsorname]=useState('')
        const [sponsor_contact,setSponsorcontact]=useState('')
        const [sponsor_type, setSponsortype]=useState('')
        const [event_id,setEventid]=useState('')
        const [sponsor_id,setSponsorid]=useState('')
        const navigate=useNavigate()
    const handleSubmit=(e) => {
        e.preventDefault();
        const eventspsr = {sponsor_id, sponsor_name, sponsor_contact, sponsor_type, event_id};
        axios.post('http://localhost:3000/auth/add_spsr', eventspsr)
        .then(result=> {
          if(result.data.Status){
              alert(result.data.msg)
              navigate('budget')
              
          }else {
              alert(result.data.Error)
          }
        })
        .catch(err => console.log(err))



    }
  return (
    <div> <h3>Hello admin, You can set Sponsors for your the event here </h3>
      <div className='d-flex justify-content-center align-items-center  vh-100  '>
      <div className='p-3 rounded w-25 border align-items-center   '>
    <form onSubmit={handleSubmit}>
      
    <div className='mb-3'>
        <label htmlFor="sponsor_name"><strong>Sponsor Name:</strong></label>
        <input type="text" name='sponsor_name' autoComplete='off' placeholder='Enter Sponsor Name'
        onChange={(e)=> setSponsorname( e.target.value)} className='form-control rounded-0'required/>
    </div>
    <div className='mb-3'>
        <label htmlFor="sponsor_contact"><strong>Sponsor Contact adress:</strong></label>
        <input type="text" name='sponsor_contact' placeholder='Enter Sponsor Contact'
        onChange={(e)=> setSponsorcontact(e.target.value)} className='form-control rounded-0' required/>
    </div>
    <div className='mb-3'>
        <label htmlFor="sponsor_type"><strong>Sponsor type:</strong></label>
        <input type="tel" name='sponsor_type' autoComplete='off' placeholder='Enter Sponsor type '
        onChange={(e)=> setSponsortype( e.target.value)} className='form-control rounded-0' required/>
        </div>
     <div className='mb-3'>
        <label htmlFor="sponsor_id"><strong> Sponsor Id:</strong></label>
        <input type="number" name='sponsor_id' autoComplete='off' placeholder='Enter Sponsor Id'
        onChange={(e)=> setSponsorid( e.target.value)} className='form-control rounded-0' required/>
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

export default Sponsor