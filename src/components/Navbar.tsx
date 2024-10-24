'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className='relative z-10 w-full bg-orange-500 text-white'>
      <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-20'>
        {/* 로고 */}
        <div className='flex items-center text-center'>
          <Link href='/'>Logo</Link>
        </div>

        {/* 메뉴 */}
        <div className='text-2xl sm:hidden'>
          {menu === false ? (
            <button onClick={handleMenu}>+</button>
          ) : (
            <button onClick={handleMenu}>-</button>
          )}
        </div>

        {/* nav-items large screen */}
        <div className='hidden sm:block'>
          <NavItem />
        </div>
      </div>

      {/* nav-items mobile */}
      <div className='block sm:hidden'>
        {menu === false ? null : <NavItem mobile />}
      </div>
    </nav>
  );
};

export default Navbar;

const NavItem = ({ mobile }: { mobile?: boolean }) => {
  return (
    <ul
      className={`text-md justify-center flex gap-4 w-full items-center ${
        mobile && 'flex-col h-full'
      }`}
    >
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href='/admin'>Admin</Link>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href='/user'>User</Link>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <button>Signout</button>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <button>SignIn</button>
      </li>
    </ul>
  );
};
