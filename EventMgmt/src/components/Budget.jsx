import React from 'react'
import axios from 'axios'
import  { useState } from 'react'


const Budget = () => {
        const [budget_amount, setBudgetamt]=useState('') 
        const [budget_item, setBudgetitem]=useState('')
        const [event_id,setEventid]=useState('')
        const [budget_id,setBudgetid]=useState('')
    const handleSubmit=(e) => {
        e.preventDefault();
        const eventbdg = {budget_id, event_id, budget_item, budget_amount};
        axios.post('http://localhost:3000/auth/add_bdg', eventbdg)
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
    <div> <h3>Hello admin, You can set the Budget for  the event here </h3>
    <div className='d-flex justify-content-center align-items-center  vh-100  '>
    <div className='p-3 rounded w-25 border align-items-center   '>
  <form onSubmit={handleSubmit}>
    
  <div className='mb-3'>
      <label htmlFor="budget_amount"><strong>Budget Amount:</strong></label>
      <input type="text" name='budget_amount' autoComplete='off' placeholder='Enter Budget Amount'
      onChange={(e)=> setBudgetamt( e.target.value)} className='form-control rounded-0'required/>
  </div>
  
  <div className='mb-3'>
      <label htmlFor="budget_item"><strong>Budget Item:</strong></label>
      <input type="tel" name='budget_item' autoComplete='off' placeholder='Enter Budget tem '
      onChange={(e)=> setBudgetitem( e.target.value)} className='form-control rounded-0' required/>
      </div>
   <div className='mb-3'>
      <label htmlFor="budget_id"><strong> Budget Id:</strong></label>
      <input type="number" name='budget_id' autoComplete='off' placeholder='Enter Budget ID'
      onChange={(e)=> setBudgetid( e.target.value)} className='form-control rounded-0' required/>
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

export default Budget