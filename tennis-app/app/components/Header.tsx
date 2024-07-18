import React from 'react';

const Header = () => {
  return (
    <header className="bg-black p-1 text-white shadow-md w-full snap-start">
      <div className="container mx-auto flex justify-between items-center">
        <nav className='flex -ml-7'>
          <a href="/"><img src="/icons/tennisball.svg" alt="Tennis Ball" className='w-16 h-16'/></a>
          <a href="/"><span className="absolute left-10 mt-3 text-black text-2xl font-semibold font-['Noto Sans Bengali']">Te</span></a>
          <a href="/"><span className="absolute left-16 mt-3 text-white text-2xl font-semibold font-['Noto Sans Bengali']">nnis Locator</span></a>
          
        </nav>
        <nav className='flex'>
          <ul className="flex space-x-4">
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/signup" className="hover:underline">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;