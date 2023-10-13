import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Account.css'



const Account = () => {


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
  }
  
  return (
    
    
    <div className='account-page'>
        <div className='containerAcc'>
            <form className='form' onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type='text' name='username' onChange={handleChange} className='inputt' placeholder='Username'></input>
                <label>Password: </label>
                <input type='text' name='password' onChange={handleChange} className='inputt' placeholder='Password'></input>
                <button className='butt'>Submit</button>
            </form>
        </div>
        
      
    </div>
  )
}

export default Account
