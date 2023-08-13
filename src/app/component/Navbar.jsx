import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between item-center bg-slate-800 px-8 py-3'>
        <Link className='text-white font-bold my-auto' href="/">Topics</Link>
        <Link className='bg-white p-2 font-bold' href="/addTopic">Add Topic</Link>
    </div>
  )
}

export default Navbar;