'use client'

import React from 'react'

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const NavBar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-black shadow-md">
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">TalkPrepAI</div>
      <nav className="space-x-6 text-gray-600 dark:text-gray-200 dark:">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
            </SignedIn>
    
  </nav>
    </header>

  )
}

export default NavBar