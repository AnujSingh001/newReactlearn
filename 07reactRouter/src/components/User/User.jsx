import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {Id} = useParams()
  return (
    <div className='text-center'>User :{Id} </div>
  )
}

export default User