import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div><nav class="navbar bg-dark border-bottom border-body navbar-expand-lg " data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Checklist</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/todos">Home</Link>
          </li>
        </ul>
      </div>
      <Link className='nav-link text-light' to='/logout'>Logout</Link>
    </div>
  </nav></div>
  )
}

export default Navbar