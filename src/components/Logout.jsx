import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
  return (
    <div className='container'>
        <h1>Thankyou for using our services.</h1>
        <Link to='/welcome'>Login again</Link>
    </div>
  )
}

export default Logout