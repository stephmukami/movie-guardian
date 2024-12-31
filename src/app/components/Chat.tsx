'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
type Props = {}

function Chat({}: Props) {

 const [chat, setChat] = useState({
  chatQuestion :"",
 })

 //could have been both "" not objects
 const [chatAnswer, setChatAnswer] = useState({
  chatResponse:""
 })

 const handleChange = (e:{target:{name:any;value:any}})=>{
  setChat({
    ...chat,
    [e.target.name]:e.target.value
  })

 }

 const handleSubmit = async(e:{preventDefault:()=>void})=>{
  e.preventDefault();

  if(!chat.chatQuestion){
    return alert("Please enter a question");
  }

  try{
    const response = await axios.post("api/gemini",{chatQuestion:chat.chatQuestion})

    if (response.status == 200){
      console.log("chat responded to", response.data)
      setChatAnswer(response.data)
    }
     setChat({chatQuestion:""});
  }catch (error){
    console.error("Error",error);
    toast.error("Oops.Please try again later");
  }
  
 }
  return (
    <>
        <div className='parent-div bg-brand-black p-6 min-h-screen  '>
        <h2 className='text-white md:text-4xl text-3xl ml-6 mb-[100px]'> Give an idea and I'll suggest sth to watch 😊 </h2>

        <div className="flex flex-col justify-center items-center md:space-y-32 space-y-14">

          <div className="flex space-x-4 items-center">
            <img src="./icons8-person-24.png" alt="person icon" className="w-[32px] h-[32px]" />
            <div className="border border-brand-grey rounded-md h-[50px] md:w-[550px] w-[250px] flex items-center ">
              <input 
                className="text-white text-center w-full h-full bg-brand-grey outline-none border-none" 
                type="text"
                name= "chatQuestion"
                value = {chat.chatQuestion}
                onChange={handleChange}
                onKeyDown={(e)=>{
                  if (e.key==="Enter"){
                    handleSubmit(e)
                  }
                }}
              />

            </div>
            <img onClick={handleSubmit}
            
                src="./icons8-send-50.png" 
                alt="send icon" 
                className="w-[40px] h-[40px] hover:filter hover:border border-white p-2 rounded-md"
              />

          </div>
             

                <div className=' w-4/6 border border-brand-grey rounded-md min-h-[100px] p-3 font-thin '>
                <ReactMarkdown className="text-white" remarkPlugins={[remarkGfm]}>
                  {chatAnswer.chatResponse || 'Your answer will appear here'}
                </ReactMarkdown>

                </div>
        </div>
        </div>
    </>
  )
}

export default Chat