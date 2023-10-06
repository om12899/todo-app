import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginComponent() {
    const [username,setUsername] = useState('om12899')
    const [password,setPassword] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [showFailed, setShowFailed] = useState(false)
    const navigate = useNavigate()

    function handleUserNameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        if(username==='om12899'){
            if(password==='abc123')
            {
                setShowSuccess(true)
                setShowFailed(false)
                navigate(`/welcome/${username}`)
            }
            else{
                setShowSuccess(false)
                setShowFailed(true)
            }
        }
        else
        {
            setShowSuccess(false)
                setShowFailed(true)
        }
    }
  return (
    <div className='container d-flex justify-content-center'>
        {showSuccess&&<div className='SuccessMsg'> Authenticated Successfully</div>}
        {showFailed&& <div className='FailedMsg'>Authentication failed</div>}
        <form className='justify-content-center' style={{width:'400px'}}>
        <h1 className='text-secondary'>Login</h1>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" value={username} onChange={handleUserNameChange} name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" value={password} onChange={handlePasswordChange} name='password' class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" onClick={handleSubmit} class="btn btn-secondary">Submit</button>
</form>
    </div>
  )
}

export default LoginComponent