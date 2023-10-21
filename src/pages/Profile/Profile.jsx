import React from 'react'
import './Profile.css'
import { useParams } from 'react-router-dom'

const Profile = () => {

  const {username} = useParams();

  return (
    <div>
      <h1>Hello, {username} </h1>
    </div>
  )
}

export default Profile
