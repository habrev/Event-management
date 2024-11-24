import React from 'react'
import axios from 'axios'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Vendor = () => {
        const [vendor_name, setVendorname]=useState('')
        const [vendor_contact,setVendorcontact]=useState('')
        const [vendor_type, setVendortype]=useState('')
        const [event_id,setEventid]=useState('')
        const [vendor_id,setVendorid]=useState('')
        const navigate=useNavigate()
    const handleSubmit=(e) => {
        e.preventDefault();
        const eventvend = { vendor_id, vendor_name, vendor_contact, vendor_type, event_id};
        axios.post('http://localhost:3000/auth/add_vend', eventvend)
        .then(result=> {
          if(result.data.Status){
              alert(result.data.msg)
              navigate('/dashboard/sponsor')

              
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
        <label htmlFor="vendor_name"><strong>Vendor Name:</strong></label>
        <input type="text" name='vendor_name' autoComplete='off' placeholder='Enter vendor Name'
        onChange={(e)=> setVendorname( e.target.value)} className='form-control rounded-0'required/>
    </div>
    <div className='mb-3'>
        <label htmlFor="vendor_contact"><strong>Vendor Contact adress:</strong></label>
        <input type="text" name='vendor_contact' placeholder='Enter Vendor Contact'
        onChange={(e)=> setVendorcontact(e.target.value)} className='form-control rounded-0' required/>
    </div>
    <div className='mb-3'>
        <label htmlFor="vendor_type"><strong>Vendor type:</strong></label>
        <input type="tel" name='vendor_type' autoComplete='off' placeholder='Enter vendor Phone '
        onChange={(e)=> setVendortype( e.target.value)} className='form-control rounded-0' required/>
        </div>
     <div className='mb-3'>
        <label htmlFor="vendor_id"><strong> Vendor Id:</strong></label>
        <input type="number" name='vendor_id' autoComplete='off' placeholder='Enter vendor ID'
        onChange={(e)=> setVendorid( e.target.value)} className='form-control rounded-0' required/>
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

export default Vendor