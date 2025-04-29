import React from 'react'
import Agent from '@/components/Agent'

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 flex flex-col items-center">
      {/* Heading */}
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Interview Generator
      </h3>

      {/* Agent Component */}
      <div className="w-full max-w-4xl">
        <Agent userName="You" userId="user1" type="generate" />
      </div>
    </div>
  )
}

export default Page
