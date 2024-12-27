import React from 'react'
import Link from 'next/link'
type Props = {}

function Navbar({}: Props) {
  return (
    <div className="parent-flex relative bg-brand-black border  flex justify-between items-center border-green-950 p-3 sm:space-x-1">
  
    <div className="user-account ">
    <div className="circle-1 rounded-full w-8 h-8 md:w-12 md:h-12  bg-brand-white ">
        <img src="./starfish.png" className="w-full h-full object-cover" alt="cartoon starfish" />
      </div>
    </div>
  
    <div className="navigation-btns flex space-x-4 items-center">
      <Link href= "/sign-up">
        <div>
          <h4 className=' text-sm md:text-base md:text-align text-brand-white   hover:text-brand-red '>Sign Up</h4>
        </div>
      </Link>

      <Link href= "/">
      <div className=" flex items-center justify-center circle-1  rounded-full h-8 w-8  md:w-12 md:h-12  bg-brand-grey">
        <img className=" h-[20px] w-[20px] md:h-[40px] md:w-[40px]"  src="./iconhome.png" alt="home icon" />
      </div>
      </Link>
 

      <Link href= "/random-roll">
      <div className=" flex items-center justify-center circle-2   h-8 w-8  md:w-12 md:h-12 rounded-full bg-brand-grey">
      <img className="h-[16px] w-[16px] md:h-[30px] md:w-[30px]"  src="./dice-icon.png" alt=" dice icon" />
      </div>
      </Link>

      <Link href= "/watchlist">
      <div className=" flex items-center justify-center circle-3  h-8 w-8  md:w-12 md:h-12 rounded-full bg-brand-grey">
      <img className= "h-[16px] w-[16px] md:h-[28px] md:w-[28px]"  src="./lib-icon.png" alt=" collection icon" />
      </div>
      </Link>

      <Link href= "/chat">
      <div className=" flex items-center justify-center circle-4  h-8 w-8  md:w-12 md:h-12 rounded-full bg-brand-grey">
      <img className="h-[16px] w-[16px] md:h-[30px] md:w-[30px]"  src="./chat-2-icon.png" alt=" chat icon" />
      </div>
      </Link>

   
    </div>
  </div>
  

  
  )
}

export default Navbar