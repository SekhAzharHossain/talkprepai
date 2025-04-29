'use client'

import React from 'react';
import Image from 'next/image';
import { AgentProps } from '@/types';

enum CallStatus {
  INACTIVE = 'INACTIVE',
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

const Agent = ({ userName }: AgentProps) => {
  const callStatus = CallStatus.ACTIVE;
  const isSpeaking = true;

  const handleCall = () => {
    // implement call logic
    console.log('Calling...');
  };

  const handleDisconnect = () => {
    // implement disconnect logic
    console.log('Disconnecting...');
  };

  return (
    <div className="flex flex-col items-center space-y-10 p-6">
      {/* Interviewer & User View */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Interviewer */}
        <div className="flex flex-col items-center space-y-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md w-56">
          <div className="relative">
            <Image
              src="/ai-avatar.png"
              alt="AI Interviewer"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            {isSpeaking && (
              <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 animate-pulse border-2 border-white dark:border-gray-800" />
            )}
          </div>
          <h3 className="text-lg font-semibold text-center">AI Interviewer</h3>
        </div>

        {/* User */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg w-56 text-center space-y-2 border border-gray-200 dark:border-gray-700">
          <Image
            src="/user-avatar.png"
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-full object-cover mx-auto"
          />
          <h3 className="text-md font-medium text-gray-800 dark:text-white">
            {userName}
          </h3>
        </div>
      </div>

      {/* Call Controls */}
      <div className="w-full flex justify-center mt-6">
        {callStatus !== CallStatus.ACTIVE ? (
          <button
            onClick={handleCall}
            className={`relative px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 ${
              callStatus === CallStatus.CONNECTING ? 'animate-pulse' : ''
            }`}
          >
            <span className="relative z-10">
              {callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED
                ? 'Start Call'
                : 'Connecting...'}
            </span>
            {callStatus === CallStatus.CONNECTING && (
              <span className="absolute inset-0 rounded-full bg-blue-400 opacity-50 animate-ping z-0" />
            )}
          </button>
        ) : (
          <button
            onClick={handleDisconnect}
            className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-200"
          >
            End Call
          </button>
        )}
      </div>
    </div>
  );
};

export default Agent;
