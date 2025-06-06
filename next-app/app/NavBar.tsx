import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex bg-pink-200 p-5'>
        <Link href="/" className='mr-5'>Next.js</Link>
        <Link href="/users" className='mr-5'>Users</Link>
    </div>
  )
}

export default NavBar