import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Status = () => {

    const navigator = useNavigate();
    const location = useLocation();
    function home(){
        navigator('/employees')
    }

    return(
        <div>
        <h2>your registration id :  {location.state.id} is {location.state.name} </h2>
        <div><button className='btn-btn-success' onClick={home}>Home</button></div>
        </div>
    )
}
export default Status