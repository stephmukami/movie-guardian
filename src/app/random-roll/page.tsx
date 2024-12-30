import React from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react'
import Random from '../components/Random'
type Props = {}

function page({}: Props) {
  //const {data:session} = useSession
  return (
    <>
    <Navbar/>
    <Random/>
    </>
  )
}

export default page