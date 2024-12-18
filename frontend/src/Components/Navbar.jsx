import React from 'react';
import { auth } from '../Authentication/firebase';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold"><a href='/'>CloudPhoto</a></h1>
        <ul className="flex space-x-5">
          <li>
            <a href="/dashboard" className="text-white font-medium hover:no-underline hover:text-gray-300">Dashboard</a>
          </li>
          <li>
            <a href="/" onClick={() => auth.signOut()} className="text-white font-medium hover:no-underline hover:text-gray-300">Signout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
