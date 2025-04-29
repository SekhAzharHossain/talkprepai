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
    <nav className="space-x-6 text-gray-600 dark:text-gray-200 dark:">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
            </SignedIn>
    
  </nav>
  )
}

export default NavBar