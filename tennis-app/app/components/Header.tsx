import React from 'react';
import { useState } from 'react';
import LoginModal from './LoginModal';
import { useRouter } from 'next/router';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <header className="bg-black p-1 text-white shadow-md w-full snap-start">
      <div className="container mx-auto flex justify-between items-center">
        <nav className='flex -ml-7'>
          <a href="/"><img src="/icons/tennisball.svg" alt="Tennis Ball" className='w-16 h-16'/></a>
          <a href="/"><span className="absolute left-10 mt-3 text-black text-2xl font-semibold font-['Noto Sans Bengali']">Te</span></a>
          <a href="/"><span className="absolute left-16 mt-3 text-white text-2xl font-semibold font-['Noto Sans Bengali']">nnis Locator</span></a>
          
        </nav>
        <nav className='flex'>
          <button onClick={openLoginModal} className=''>Login</button>
          {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
        </nav>
      </div>
    </header>
  );
};

export default Header;