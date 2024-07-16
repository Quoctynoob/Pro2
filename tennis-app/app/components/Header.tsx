import React from 'react';

const Header = () => {
  return (
    <header className="bg-black p-3 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Tennis Locator</h1>
        <nav>
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