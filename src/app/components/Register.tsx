'use client';

import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import Image from "next/image"
import Link from "next/link"

export default function Register() {
  const [formData, setFormData] = useState({
    firstName:'',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''

  });

   //state for handling error
   const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //function to register user
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let inputError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.email && !formData.password) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not be empty",
      });
      return
    }

    if (!formData.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });
      return
    }

    if (formData.confirmPassword !== formData.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formData.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return
    }

    setFormError(inputError);

    axios
      .post("/api/registerApi", formData)
  
      .then(() =>
        toast(" ✅ Successful Registration ! Proceed to login🎉", {
          duration: 5000,
          style: {},
          className: "",

          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },

        })

      )
      .catch(() => toast("Sorry, Something went wrong😔!", {
        duration: 5000,
        // Styling
        style: {},
        className: "",

        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      })
     );
  };

  
  


return (
      <>
 <div className='home-container border border-blue-600 flex flex-col md:flex-row w-screen h-screen'>

{/* Image Section */}
<div className="home-container-image border border-red-200 h-screen md:w-full relative">
  <img className='w-full h-full object-cover' src="./pexels1.jpg" alt="movie poster" />
</div>

{/* Form Section */}
<div className="form-container border border-yellow-200 bg-brand-black text-brand-white md:w-full h-screen flex justify-center items-center p-8">
  <div>
  <h2 className='text-6xl text-center text-brand-red mb-4 relative bottom-6'>Movie Guardian</h2>

    <h2 className='text-4xl p-4 text-center'>Create an account</h2>
    <h3 className='text-1xl p-3 text-center'>
      Already have an account? <Link href="/login"> <span className='text-brand-red'>Log in</span>
      </Link>
    </h3>
    
    <form className='p-4' onSubmit={handleSubmit}>
      
      {/* Names */}
      <div className="names flex mt-8 space-x-6">
        <input className="w-full text-center bg-brand-grey placeholder-white text-white px-4 py-2 rounded-lg" type="text" placeholder='First name' name="firstName" value = {formData.firstName} onChange={handleChange} />
        <input className="w-full text-center bg-brand-grey placeholder-white text-white px-4 py-2 rounded-lg" type="text" placeholder='Last name' name= "lastName" value = {formData.lastName} onChange={handleChange} />
      </div>

      {/* Email */}
      <div className='mt-8'>
        <input className="w-full text-center bg-brand-grey placeholder-white text-white px-4 py-2 rounded-lg" type="email" placeholder='Email address'name="email" value = {formData.email} onChange={handleChange} />
      </div>

      {/* Password */}
      <div className='mt-8'>
        <input className="w-full text-center bg-brand-grey placeholder-white text-white px-4 py-2 rounded-lg" type="password" placeholder='Password'name="password" value = {formData.password} onChange={handleChange} />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-10">
        <button className='bg-brand-red text-white text-center w-40 rounded h-[40px]'>Sign Up</button>
      </div>
    </form>

    {/* Authentication Buttons */}
    <div className="auth-buttons flex justify-center space-x-4 mt-8">

      <button className=" flex items-center google-auth bg-white text-black px-4 py-2 rounded">
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