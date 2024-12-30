'use client'
import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import { toast } from "react-hot-toast"
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
type Props = {}

function Login({}: Props) {

  const router = useRouter();

  const [formInfo,setformInfo] = useState({
    email:"",
    password:""
  });

  const [formError,setFormError] = useState({
    email:"",
    password:""
  })

  const handleChange =(e:{target:{name:any;value:any}})=>{
    setformInfo({
      ...formInfo,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async(e:{preventDefault:()=>void})=>{
    e.preventDefault();

    let inputError = {
       email:"",
    password:""
    }

    if(!formInfo.email && !formInfo.password){
      setFormError(
        {
        ...inputError,
        email:"Enter valid email address",
        password:"Enter valid password"
        }
        
      );
      return
    }
    //confirm why we have
    signIn('credentials',{
      ...formInfo,
      redirect:false
    }).then(
      async(callback) =>{
        if(callback?.error){
          toast.error("Wrong Credentials",{
            duration:3000
          });
          console.log(callback?.error);
        }
        else if(callback?.ok){
          toast.success("Successful Login",{
            duration:3000
          });
          router.push('/')
        }
      }
    )

  }
//handling login via google
// signIn('credentials', {
//   ...formInfo,
//   redirect: false
// }).then((callback) => {
//   if(callback?.error) {
//     toast.error("Wrong Credentials", {
//       duration: 3000
//     });
//   } else if(callback?.ok) {
//     toast.success("Successful Login", {
//       duration: 3000
//     });
//     router.push('/');
//   }
// });
// }

const handleGoogleSignIn = async () => {
try {
  const result = await signIn('google', { 
    redirect: false,
    callbackUrl: '/' // or your desired redirect path
  });
  
  if (result?.error) {
    toast.error('Failed to sign in with Google', {
      duration: 3000
    });
  } else if (result?.ok) {
    toast.success('Successfully signed in with Google!', {
      duration: 3000
    });
    router.push(result.url || '/');
  }
} catch (error) {
  toast.error('Something went wrong, please try again', {
    duration: 3000
  });
}
};




  return (
   <>
    <div className='home-container border border-blue-600 flex flex-col md:flex-row w-screen h-screen'>


{/* Form Section */}
<div className="form-container border border-yellow-200 bg-brand-black text-brand-white md:w-full h-screen flex justify-center items-center p-8">
  <div>
    <h2 className='text-4xl p-4 text-center'>Welcome Back</h2>
    <h3 className='text-1xl p-3 text-center'>
      
      No account? <Link href="/sign-up">
      <span className='text-brand-red'>Sign Up</span>
      </Link> 
    </h3>
    
    <form className='p-4' action="" onSubmit={handleSubmit}>
    

      {/* Email */}
      <div className='mt-8 w-[400px]'>
        <input className="w-full text-center bg-brand-grey placeholder-white text-white px-4 py-2 rounded-lg" type="email" placeholder='Email address' name="email" value={formInfo.email} onChange={handleChange} />
      {formError.email &&(<p> {formError.email}</p>)}
      </div>

      {/* Password */}
      <div className='mt-8'>
        <input className="w-full text-center bg-brand-grey placeholder-white text-white px-4 py-2 rounded-lg" type="password" placeholder='Password' name="password" value={formInfo.password} onChange={handleChange} />
        {formError.password &&(<p> {formError.password}</p>)}

      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-10">
        <button className='bg-brand-red text-white text-center w-40 rounded h-[40px]'>Log in</button>
      </div>
    </form>

    <div className="auth-buttons flex justify-center space-x-4 mt-8">

      <button className=" flex items-center google-auth bg-white text-black px-4 py-2 rounded"
      onClick={handleGoogleSignIn}
      >
        <img src="./google-icon.png"  className="w-[20px] h-[20px] mr-2" alt="google icon" />
        Google
        </button>

        <button className=" flex items-center apple-auth bg-white text-black px-4 py-2 rounded">
        <img src="./apple-icon.png"  className="w-[20px] h-[20px] mr-2" alt="apple icon" />
        Apple
        </button>
    </div>

  </div>
</div>
</div>
   </>
  )
}

export default Login