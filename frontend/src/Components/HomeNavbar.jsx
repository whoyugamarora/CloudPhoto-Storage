import React from 'react';

const HomeNavbar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold"><a href='/'>CloudPhoto</a></h1>
        <ul className="flex space-x-5">
          <li>
            <a href="/" className="text-white font-medium hover:no-underline hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/login" className="text-white font-medium hover:no-underline hover:text-gray-300">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
