import React from 'react'
import Navbar from '../components/Navbar'
import Chat from '../components/Chat'

type Props = {}

function page({}: Props) {
  return (
    <>
    <Navbar/>
    <Chat/>
    </>
  )
}

export default page