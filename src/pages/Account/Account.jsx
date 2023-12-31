import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Account.css'
import {useNavigate} from 'react-router-dom'



const Account = () => {

const navigate = useNavigate();
  //initialise, variables
  const [formData, setformData] = useState({
    "username": "",
    "password": "",
  });


  //updating thr data
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setformData({
      ...formData,
      [name]: value
    })
  }

  //logging
  const handleSubmit = (e) =>{
    e.preventDefault()

    console.log(formData)

    fetch('http://127.0.0.1:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      const {username} = formData;
      navigate(`/profile/${formData.username}`)
    
  }


  ////


  
  
  return (
    
    
    <div className='account-page'>
        <div className='containerAcc'>
            <form className='form' onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type='text' name='username' onChange={handleChange} className='inputt' placeholder='Username'></input>
                <label>Password: </label>
                <input type='password' name='password' onChange={handleChange} className='inputt' placeholder='Password'></input>
                <button className='butt' >Submit</button>
            </form>
        </div>
        
      
    </div>
  )
}

export default Account
