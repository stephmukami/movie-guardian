import React from 'react'

type Props = {}

function WatchList({}: Props) {
  return (
    <div className='parent-div bg-brand-black p-4 h-screen  '>
        <h2 className='text-white text-4xl ml-6 mb-6'> Update your WatchList</h2>

        <div className="flex flex-col justify-center items-center">
                <div className=' w-5/6 border border-brand-grey rounded-md h-[38px] flex '>
                    <input className=' text-white text-center w-full h-full bg-brand-grey' type="text" />
                </div>
        </div>

     
    </div>
  )
}

export default WatchList