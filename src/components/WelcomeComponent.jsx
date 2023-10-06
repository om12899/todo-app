import React from 'react'
import { Link, useParams } from 'react-router-dom'

function WelcomeComponent() {
     const userParams = useParams()
     console.log(userParams)
  return (
    <div className='container justify-content-center'><h1> Welcome {userParams.username}</h1> 
    <div>
        Manage your Todos <Link to="/todos">Here</Link>
    </div>
    </div>
  )
}

export default WelcomeComponent