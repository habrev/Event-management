import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import SignIn from './components/signin'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Profile from './components/Profile'
import User from './components/User'
import UserDashboard from './components/UserDashboard'
import SetEvent from './components/SetEvent'
import Register from './components/Register.jsx'
import UserHome from './components/UserHome.jsx'
import Addorganizer from './components/Addorganizer.jsx'
import Vendor from './components/Vendor.jsx'
import Sponsor from './components/Sponsor.jsx'
import Budget from './components/Budget.jsx'
import Homepg from './components/Homepg.jsx'
import Eventlist from './components/Eventlist.jsx'
import RegisteredonEvents from './components/Registered on Events.jsx'
import PropertyAmenities from './components/PropertyAmenities';
import Businessr from './router/Businessr';
import Devfestr from './router/Devfestr';
import Musicr from './router/Musicr';
import Startupr from './router/Startupr';
import Trader from './router/Trader';
import Weddingr from './router/Weddingr';
import DeleteUsers from './components/DeleteUsers.jsx'
import Feedback from './components/Feedback.jsx'
import Eventlistadmin from './components/Eventlistadmin.jsx'
import Viewfeedback from './components/Viewfeedback.jsx'
import DeleteEvent from './components/DeleteEvent.jsx'



function App() {
  
  return(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Homepg/>}/>
    <Route path='/adminlogin' element={<Login />} />    
    <Route path='/adminlogin/signup' element={< SignIn />} /> 
    <Route path='/dashboard' element={< Dashboard />} >
    <Route path='' element={<Home/>} />
    <Route path='/dashboard/users' element={<User/>} />
    <Route path='/dashboard/evlist' element={<Eventlist/>}/>
    <Route path='/dashboard/budget' element={<Budget/>}/>
    <Route path='/dashboard/sponsor' element={<Sponsor/>}/> 
    <Route path='/dashboard/vendor' element={<Vendor/>}/> 
    <Route path='/dashboard/setevent' element={<SetEvent/>}/>
    <Route path='/dashboard/organizer' element={<Addorganizer/>}/> 
    <Route path='/dashboard/profile' element={<Profile/>}/>
    <Route path='/dashboard/deleteuser' element={<DeleteUsers/>}/>
    <Route path='/dashboard/feed_rev' element={<Viewfeedback/>}/>
    <Route path='/dashboard/eventlistadmin' element={<Eventlistadmin/>}/>
    <Route path='/dashboard/deleteevent' element={<DeleteEvent/>}/>

    </Route>
    
    <Route path='/dashboard2' element={< UserDashboard />}>
    <Route path='' element={<UserHome/>}/>
      <Route path='/dashboard2/users' element={<User/>}/>
      <Route path='/dashboard2/feedback' element={<Feedback/>}/>
      
      <Route path='/dashboard2/evlist' element={<Eventlist/>}/>
      <Route path='/dashboard2/registered' element={<RegisteredonEvents/>}/>
      <Route path='/dashboard2/profile' element={<Profile/>}/>
      <Route path='/dashboard2/register' element={<Register/>}/>
    </Route>

      <Route path="property" element={<PropertyAmenities />} />
      <Route path="businessr" element={<Businessr />} />
      <Route path="devfestr" element={<Devfestr />} />  
      <Route path="musicr" element={<Musicr />} />  
      <Route path="startupr" element={<Startupr />} />  
      <Route path="trader" element={<Trader />} />  
      <Route path="Weddingr" element={<Weddingr />} /> 
    </Routes>
   </BrowserRouter>
  )

}

export default App
