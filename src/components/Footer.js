import React from 'react';

// Logo
import Logowhite from '../assets/img/logo-white.svg'

const Footer = () => {
  return <footer className='bg-primary py-8 '>
    <div className="container mx-auto text-white flex justify-between">
      {/* logo */}
      <a href="/">
        <img src={Logowhite} alt="" />
      </a>
      Copyright &copy; 2024. All rights reserved
    </div>
  </footer>
};

export default Footer;
