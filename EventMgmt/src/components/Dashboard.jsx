import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"


const Dashboard=()=> {

  return (
  <div className="container-fluid">
    <div className='row flex-nowrap'>
      <div className='col-auto col-md-3 col-x1-2 px-0 bg-dark'>
        <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
          <Link to="/dashboard"
          className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none'>
            <span className='fs-5 fw-bolder d-done d-sm-inline'>
              management/Admin Dashboard</span></Link>
          <ul 
          className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'
          id='menu'>
            <li className='w-100'>
              <Link to="/dashboard"
               className="nav-link text-white px-0 align-middle">
                <i className='fs-4 bi-speedometer2 ms-2'></i>
                <span className='ms-2 d-done d-sm-inline'>Dashboard</span>
                </Link>
            </li>
            <li className='w-100'>
            <Link 
             to="/dashboard/users"
             className='nav-link px-0 align-middle text-white'>
              <i className='fs-4 bi-people ms-2'></i>
              <span className='ms-2 d-done d-sm-inline'> Manage Users</span>
             </Link>
            </li>
            <li className='w-100'>
            <Link to="/dashboard/setevent"
            className='nav-link px-0 align-middle text-white' >
              <i className='fs-4 bi-columns ms-2'></i>
              <span className='ms-2 d-done d-sm-inline'>Set Event </span>
              </Link>
              </li>
              <li className='w-100'>
            <Link to="/dashboard/organizer"
            className='nav-link px-0 align-middle text-white' >
              <i className='fs-4 bi-columns ms-2'></i>
              <span className='ms-2 d-done d-sm-inline'>Set Organizer </span>
              </Link>
            </li>
            <li className='w-100'>
            <Link to="/dashboard/vendor"
            className='nav-link px-0 align-middle text-white' >
              <i className='fs-4 bi-columns ms-2'></i>
              <span className='ms-2 d-done d-sm-inline'>Set Vendor </span>
              </Link>
            </li>
            <li className='w-100'>
            <Link to="/dashboard/sponsor"
            className='nav-link px-0 align-middle text-white' >
              <i className='fs-4 bi-columns ms-2'></i>
              <span className='ms-2 d-done d-sm-inline'>Set Sponser </span>
              </Link>
            </li>
            <li className='w-100'>
            <Link to="/dashboard/budget"
            className='nav-link px-0 align-middle text-white' >
              <i className='fs-4 bi-columns ms-2'></i>
              <span className='ms-2 d-done d-sm-inline'>Set Budget </span>
              </Link>
            </li>
            <li className='w-100'>
            <Link to="/dashboard/profile"
            className='nav-link px-0 align-middle text-white' >
               <i className='fs-4 bi-person ms-2'></i>
               <span className='ms-2 d-done d-sm-inline'>profile </span>
            </Link>
            </li>
            <li className='w-100'>
            <Link to="/dashboard/evlist"
            className='nav-link px-0 align-middle text-white' >
              <i className='fs-4 bi-columns ms-2'></i>
              <span className='ms-2 d-done d-sm-inline'>Event List</span>
              </Link>
            </li>
            <li className='w-100'>
            <Link to="/dashboard/eventlistadmin"
            className='nav-link px-0 align-middle text-white' >
              <i className='fs-4 bi-columns ms-2'></i>
              <span className='ms-2 d-done d-sm-inline'>Delete Event</span>
              </Link>
            </li>
            <li className='w-100'>
            <Link to="/dashboard/feed_rev"
            className='nav-link px-0 align-middle text-white' >
              <i className='bi bi-star-fill ms-2'></i>
              <span className='ms-2 d-done d-sm-inline'> Feedback review</span>
              </Link>
            </li>
            <li className='w-100'>
            <Link to="/" className='nav-link px-0 align-middle text-white' >
            <i className='fs-4 bi-power ms-2'></i>
            <span className='ms-2 d-done d-sm-inline'>Logout </span>
            </Link>
            </li>
          </ul>
        </div>

      </div>
      <div className='col p-0 m-0 overflow-hidden'>
        <div className='p-2 d-flex justify-content-center shadow'>
          <h4>Nexus Event Management</h4>
        </div>
        <Outlet />
      </div>
    </div>
  </div>
   
  )
}

export default Dashboard