import React from 'react'
import { Link } from 'react-router'
import { usePuterStore } from '~/lib/puter'

const Navbar = () => {
  const {auth} = usePuterStore()
  return (
    <nav className='navbar'>
        <Link to="/" className='text-2xl font-bold text-gradient'>RESUMIND</Link>
        <div className='flex flex-row items-center'>
          <Link to="/upload" className='primary-button w-fit mx-1'>Upload Resume</Link>
          <button className='cursor-pointer mx-1' onClick={auth.signOut}>
            <img src="/icons/logout.svg" alt="logo" width={32} height={32} />
          </button>
        </div>
    </nav>
  )
}

export default Navbar