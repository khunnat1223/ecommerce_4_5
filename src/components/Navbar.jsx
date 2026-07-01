import React, { useState } from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  const [isActiveNavbar, setIsActiveNavbar] = useState(false);
  return (
    <div>
      <div>
        <h1 className='bg-black text-white text-center py-1 text-sm'>🚚 Free shipping on orders over 50$ 🌟</h1>
        <nav className='flex justify-around py-3'>
          <div className='flex gap-5 font-bold text-xl'><h1>KH</h1><button onClick={()=>{setIsActiveNavbar(true)}} className='flex md:hidden'>Icon</button></div>
          <ul className='gap-6 hidden md:flex'>
            <li><NavLink to='/' className="hover:text-amber-700 hover:underline aria-[current=page]:underline decoration-amber-700">Home</NavLink></li>
            <li><NavLink to="/product" className="hover:text-amber-700 hover:underline aria-[current=page]:underline decoration-amber-700">Product</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-amber-700 hover:underline aria-[current=page]:underline decoration-amber-700">Contact</NavLink></li>
            <li><NavLink to="/about" className="hover:text-amber-700 hover:underline aria-[current=page]:underline decoration-amber-700">About</NavLink></li>
          </ul>
          <div>
            <span class="material-symbols-outlined">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-user"></i>
              <i class="fa-solid fa-bag-shopping"></i>
            </span> 
          </div>

          <ul className={`${isActiveNavbar ? 'left-0': '-left-full'} gap-6 bg-black h-dvh w-64 text-white p-5 space-y-4 absolute top-0`}>
            <li className='flex justify-end'><button onClick={()=>{setIsActiveNavbar(false)}} className=' border hover:bg-gray-500 px-2 py-1 border-dashed rounded-full'><i class="fa-solid fa-xmark"></i></button></li>
            <li><NavLink to='/' className="hover:text-amber-700 hover:underline aria-[current=page]:underline decoration-amber-700">Home</NavLink></li>
            <li><NavLink to="/product" className="hover:text-amber-700 hover:underline aria-[current=page]:underline decoration-amber-700">Product</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-amber-700 hover:underline aria-[current=page]:underline decoration-amber-700">Contact</NavLink></li>
            <li><NavLink to="/about" className="hover:text-amber-700 hover:underline aria-[current=page]:underline decoration-amber-700">About</NavLink></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Navbar