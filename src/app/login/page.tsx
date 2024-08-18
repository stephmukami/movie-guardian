import React from 'react'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
type Props = {}

function page({}: Props) {
  return (
    <div>
       <Navbar/>
       <Login/> 
    </div>
  )
}

export default page