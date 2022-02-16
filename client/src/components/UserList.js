import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions'
import UserCard from './UserCard'

const UserList = () => {
    const dispatch=useDispatch()
    const {loading,users}=useSelector(state=>state)
    useEffect(() => {
      
    dispatch(getUsers())
     
    }, [dispatch])
    

    console.log(users)
    return (
    <div>{loading?<h1>Loading ...</h1>:React.Children.toArray(users.map(user=><UserCard user={user}/>))}</div>
  )
}

export default UserList