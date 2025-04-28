import React from 'react'

const NavBar = () => {
  return (
    <nav className="space-x-6 text-gray-600 dark:text-gray-300">
        <a href="#login" className="hover:text-blue-500 dark:hover:text-blue-400">Login</a>
        <a href="#signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
            Sign Up
        </a>
  </nav>
  )
}

export default NavBar