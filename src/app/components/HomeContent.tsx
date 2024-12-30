'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
type Props = {}


function HomeContent({}: Props) {
  const {data:session} = useSession();


  return (
    <div className='home-parent-div bg-brand-black min-h-screen flex flex-col justify-center items-center pb-6'>
        <h3 className=' text-center text-[50px] text-brand-red mb-4'>  Hello { session?.user?.name || 'Explorer'}!</h3>
        <div className="graphic border h-60 w-5/6 mb-8 "> graphic here</div>

        <div className="navigation-btns flex flex-col sm:flex-row sm:space-x-60 space-y-6 sm:space-y-0">
      <div className="tile1 flex flex-col justify-center items-center">

      <div className=" flex items-center justify-center circle-2   w-16 h-16 rounded-full bg-brand-grey mb-2">
      <img className="h-[30px] w-[30px]"  src="./dice-icon.png" alt="" />
      </div>

      <h4 className='text-brand-red text-2xl mb-2'>Random Roll </h4>
      <div className="card1 bg-brand-grey text-center w-60 h-40 p-6 text-white rounded-md">
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, exercitationem.</h5>
      </div>

      </div>
      
<div className="tile2 flex flex-col justify-center items-center">

    <div className=" flex items-center justify-center circle-2   w-16 h-16 rounded-full bg-brand-grey mb-2">
        <img className="h-[30px] w-[30px]"  src="./lib-icon.png" alt="" />
    </div>

    <h4 className='text-brand-red text-2xl mb-2'> Watch List </h4>
    <div className="card1 bg-brand-grey text-center w-60 h-40 p-6 text-white rounded-md">
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, exercitationem.</h5>
    </div>

</div>
<div className="tile3 flex flex-col justify-center items-center">

    <div className=" flex items-center justify-center circle-2   w-16 h-16 rounded-full bg-brand-grey mb-2">
        <img className="h-[30px] w-[30px]"  src="./chat-2-icon.png" alt="" />
    </div>

    <h4 className='text-brand-red text-2xl mb-2'> Get Suggestion </h4>
    <div className="card1 bg-brand-grey text-center w-60 h-40 p-6 text-white rounded-md">
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, exercitationem.</h5>
    </div>

</div>

    </div>
   

    </div>
  )
}

export default HomeContent