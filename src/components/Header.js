import React, { useState, useEffect } from 'react';

// logo
import LogoWhite from '../assets/img/logo-white.svg'
import LogoDark from '../assets/img/logo-dark.svg'

const Header = () => {
  const [header, setHeader] = useState(false)
  // scroll useEffect 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })


  return <header className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'
    } fixed z-50 w-full transition-all duration-500`}>
    <div className="container mx-auto flex flex-col lg:flex-row items-center  gap-y-6 lg:gap-y-0 lg:justify-between ">
      {/* logo */}
      <a href="/">
        {header ? (
          <img src={LogoDark} />
        ) : (
          <img src={LogoWhite} />
        )}
      </a>

      {/* nav */}
      <nav className={`${header ? 'text-primary ' : 'text-white'
        } flex items-center gap-x-4 font-tertiary tracking-[3px] text-[15px] uppercase lg:gap-x-8 lg:text-lg `}>
        <a className='hover:text-accent transition' href="">
          Home
        </a>
        <a className='hover:text-accent transition' href="">
          Rooms
        </a>
        <a className='hover:text-accent transition' href="">
          Restaurant
        </a>
        <a className='hover:text-accent transition' href="">
          Spa
        </a>
        <a className='hover:text-accent transition' href="">
          Contact
        </a>
      </nav>

    </div>
  </header>
};

export default Header;
