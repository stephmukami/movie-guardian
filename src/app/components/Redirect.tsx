import React from 'react'
import Link from 'next/link'
type Props = {}

function Redirect({}: Props) {
  return (
    <>
    <div className='parent-div bg-brand-black p-4 h-screen border border-red-100 flex justify-center items-center'>
    <div className="bg-brand-grey rounded-lg text-center p-4 w-[400px] h-[400px] flex justify-center items-center">
        <h3 className="text-white">
            You are currently not logged in. <br></br>Login or Register to access app features
            <div className="auth-buttons flex justify-center space-x-4 mt-8">

<Link href="/sign-up">
<button className=" hover:bg-brand-red hover:text-white flex items-center google-auth bg-white text-black px-4 py-2 rounded">
  Register
  </button>
</Link>


<Link href="/login">
<button className=" hover:bg-brand-red hover:text-white flex items-center apple-auth bg-white text-black px-4 py-2 rounded">
  Login 
  </button>
</Link>

</div>

        </h3>
    
    </div>
        </div>
    </>
  )
}

export default Redirect