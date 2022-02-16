import React from 'react'
import './UserCard.css'
const UserCard = ({user}) => {
  return (
    <div className="card">

    <h1>{user.name}</h1>
    <p className="title">{user.email}</p>
    <p>{user.phone}</p>
    <a href="#"><i className="fa fa-dribbble"></i></a>
    <a href="#"><i className="fa fa-twitter"></i></a>
    <a href="#"><i className="fa fa-linkedin"></i></a>
    <a href="#"><i className="fa fa-facebook"></i></a>
    <p><button>More Details</button></p>
  </div>
  )
}

export default UserCard