import React from 'react'
import Link from 'next/link'
type Props = {}

function Navbar({}: Props) {
  return (
    <div className="parent-flex relative bg-brand-black border  flex justify-between items-center border-green-950 p-3 sm:space-x-1">
  
    <div className="user-account ">
    <div className="circle-1 w-16 h-16 rounded-full bg-brand-white ">
        <img src="./starfish.png" alt="cartoon starfish" />
      </div>
    </div>
  
    <div className="navigation-btns flex space-x-4 ">
      <Link href= "/">
      <div className=" flex items-center justify-center circle-1   w-16 h-16 rounded-full bg-brand-grey">
        <img className="h-[40px] w-[40px]"  src="./iconhome.png" alt="home icon" />
      </div>
      </Link>
 

      <Link href= "/random-roll">
      <div className=" flex items-center justify-center circle-2   w-16 h-16 rounded-full bg-brand-grey">
      <img className="h-[30px] w-[30px]"  src="./dice-icon.png" alt=" dice icon" />
      </div>
      </Link>

      <Link href= "/watch-list">
      <div className=" flex items-center justify-center circle-3  w-16 h-16 rounded-full bg-brand-grey">
      <img className="h-[30px] w-[30px]"  src="./lib-icon.png" alt=" collection icon" />
      </div>
      </Link>

      <Link href= "/chat">
      <div className=" flex items-center justify-center circle-4  w-16 h-16 rounded-full bg-brand-grey">
      <img className="h-[30px] w-[30px]"  src="./chat-2-icon.png" alt=" chat icon" />
      </div>
      </Link>

   
    </div>
  </div>
  

  
  )
}

export default Navbar