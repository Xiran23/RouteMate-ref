import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate()

  const handleSubmit = ()=>{
    console.log("-------");
    navigate("/");
  }
  
  return (
    <div className='components'>
      contact sdsd
      <button onClick = {handleSubmit}>back to Home</button>
      <Outlet/>
    </div>
  )
}

export default Contact
