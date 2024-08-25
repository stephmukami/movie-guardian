import React from 'react'

type Props = {}

function Chat({}: Props) {
  return (
    <>
        <div className='parent-div bg-brand-black p-4 h-screen  '>
        <h2 className='text-white text-4xl ml-6 mb-6'> Tell me your mood and I give sth to match 😏 </h2>

        <div className="flex flex-col justify-center items-center space-y-32">
                <div className=' w-5/6 border border-brand-grey rounded-md h-[38px] flex '>
                    <input className=' text-white text-center w-full h-full bg-brand-grey' type="text" />
                </div>

                <div className=' w-4/6 border border-brand-grey rounded-md h-[100px]  '>
                </div>
        </div>
        </div>
    </>
  )
}

export default Chat