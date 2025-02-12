import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='font-bold font-mono flex justify-between p-4 bg-[#ffffff1f] m-3 rounded-lg border'>
        <div className='text-xl'>
        <Link href='#herosection'><h1>OCULAR<span className='text-[goldenrod]'>ISM</span></h1></Link>
        </div>
        <div>
            <ul className='flex gap-4'>
                <Link href='#detection'><li className='hover:text-[goldenrod]'>Detect</li></Link>
                <Link href='#doctors'><li className='hover:text-[goldenrod]'>Doctors</li></Link>
                <Link href='#advise'><li className='hover:text-[goldenrod]'>Get Advise</li></Link>
                <Link href='documentation'><li className='hover:text-[goldenrod]'>Documentation</li></Link>
            </ul>
        </div>
    </div>
  )
}
