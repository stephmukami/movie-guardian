import React from 'react'

type Props = {}

function Login({}: Props) {
  return (
   <>
    <div className='home-container border border-blue-600 flex flex-col md:flex-row w-screen h-screen'>



{/* Form Section */}
<div className="form-container border border-yellow-200 bg-brand-black text-brand-white md:w-full h-screen flex justify-center items-center p-8">
  <div>
    <h2 className='text-4xl p-4 text-center'>Log In</h2>
    <h3 className='text-1xl p-3 text-center'>
      No account? <span className='text-brand-red'>Sign Up</span>
    </h3>
    
    <form className='p-4' action="">
    

      {/* Email */}
      <div className='mt-8 w-[400px]'>
        <input className="w-full text-center bg-brand-grey placeholder-white text-white px-4 py-2 rounded-lg" type="email" placeholder='Email address' />
      </div>

      {/* Password */}
      <div className='mt-8'>
        <input className="w-full text-center bg-brand-grey placeholder-white text-white px-4 py-2 rounded-lg" type="password" placeholder='Password' />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-10">
        <button className='bg-brand-red text-white text-center w-40 rounded h-[40px]'>Log in</button>
      </div>
    </form>

    {/* Authentication Buttons */}
    <div className="auth-buttons flex justify-center space-x-4 mt-8">
      <button className="google-auth bg-white text-black px-4 py-2 rounded">Google</button>
      <button className="apple-auth bg-white text-black px-4 py-2 rounded">Apple</button>
    </div>
  </div>
</div>
</div>
   </>
  )
}

export default Login