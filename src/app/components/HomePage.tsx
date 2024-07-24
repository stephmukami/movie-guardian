import React from 'react'
import Image from 'next/image'
type Props = {}

function HomePage({}: Props) {
  return (
    <div className='home-container border border-blue-600 flex flex-col md:flex-row w-screen h-screen'>

      <div className="home-container-image border border-red-200 h-screen md:w-full relative">
        <h2 className='text-6xl text-brand-red absolute top-0 left-0 z-10'>Movie Guardian</h2>
        <img className='w-full h-full object-cover' src="./pexels1.jpg" alt="movie poster" />
      </div>

  <div className="form-container border border-yellow-200 bg-brand-black text-brand-white md:w-full h-screen">
    <h2 className='text-4xl '>Create an account</h2>
    <h3 className='text-1xl '>Already have an account? <span className='text-brand-red'>Log in</span></h3>
    <form action="">
      <input type="text" placeholder='first name'/>
      <input type="text" placeholder='last name'/>
      <input type="email" placeholder='email address'/>
      <input type="password" placeholder='password'/>
      <button>Sign in</button>
    </form>

    <div className="auth-buttons">
      <button className="google-auth">Google</button>
      <button className="apple-auth">Apple</button>
    </div>
  </div>
</div>

  )
}

export default HomePage