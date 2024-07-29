import React, { useState } from 'react';
import LoginModal from '../register/LoginModal';
import { useRouter } from 'next/router';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSignUp = () => {
    router.push('/signup');
  }

  return (
    <header className="bg-black p-1 text-white shadow-md w-full snap-start">
      <div className="container mx-auto flex justify-between items-center">
        <nav className='flex -ml-7'>
          <a href="/"><img src="/icons/tennisball.svg" alt="Tennis Ball" className='w-16 h-16'/></a>
          <a href="/"><span className="relative -left-8 top-3 text-black text-2xl font-semibold font-['Noto Sans Bengali']">Te</span></a>
          <a href="/"><span className="relative -left-7 top-3 text-white text-2xl font-semibold font-['Noto Sans Bengali']">nnis Locator</span></a>
        </nav>
        <nav className='flex ml-auto space-x-2'>
          <button onClick={handleSignUp}>
            Sign Up
          </button>
          <span>|</span>
          <button onClick={openLoginModal}>
            Login
          </button>
        </nav>
        {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
      </div>
    </header>
  );
};

export default Header;
