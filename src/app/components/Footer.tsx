import React from 'react'
import Link from 'next/link'
type Props = {}

function Footer({}: Props) {
  return (
    <>
    <div className="bg-brand-grey flex justify-between text-white p-6">
        <div className="flex-child">
            <h4 className='text-xs'> &copy;  Stephanie Mukami All rights reserved.</h4>
        </div>

        <div className='flex space-x-4'>
        <Link href="https://github.com/stephmukami">
        <div className="flex-child">
            <img src="./icons8-github-80.png" className="h-[24px] w-[24px]" alt="" />
        </div>
        </Link>
    

        <Link href="https://linktr.ee/mukami_stephanie">
        <div className="flex-child">
        <img src="./icons8-website-48.png" className="h-[24px] w-[24px]" alt="" />

        </div>
        </Link>

        </div>
    
    </div>
    </>
  )
}

export default Footer