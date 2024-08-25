import React from 'react'
import Navbar from '../components/Navbar'
import WatchList from '../components/WatchList'

type Props = {}

function page({}: Props) {
  return (
    <>
    <Navbar/>
    <WatchList/>
    </>

  )
}

export default page