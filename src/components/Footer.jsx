import React from 'react'
import { Link } from 'react-router'
function Footer() {
  return (
    <>
        <div className='bg-black text-white flex justify-between px-40 py-10'>
            <div>Copyright © 2026 - MasterIT Store</div>
            <div className='flex gap-5'>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link>Term and conditional</Link>
            </div>
        </div>
    </>
  )
}

export default Footer