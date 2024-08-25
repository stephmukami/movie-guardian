import React from 'react'

type Props = {}

function Random({}: Props) {
  return (
    <>
          <div className='parent-div bg-brand-black p-4 h-screen  '>
        <h2 className='text-white text-4xl ml-6 mb-6'> Get a random suggestion 😵 </h2>

        <div className="flex flex-col justify-center items-center space-y-32">
        
        <div className=" flex items-center justify-center circle-2   w-[100px] h-[100px] rounded-full bg-brand-grey">
            <img className="h-[90px] w-[90px]"  src="./icons82.png" alt="" />
      </div>

                <div className=' w-4/6 border border-brand-grey rounded-md h-[100px]  '>
                </div>
        </div>
        </div>
    </>
  )
}

export default Random