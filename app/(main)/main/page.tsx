import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import InterviewCard from '@/components/InterviewCard';
import { Interview } from '@/types';

const dummyInterviews: Interview[] = [
  {
    id: '1',
    userId: 'user1',
    role: 'Frontend Developer',
    type: 'technical',
    techstack: ['React', 'TypeScript', 'Next.js'],
    level: 'junior',
    questions: ['What is React?'],
    finalized: false,
    createdAt: '2025-03-15T10:00:00Z',
  },
  {
    id: '2',
    userId: 'user2',
    role: 'Backend Developer',
    type: 'technical',
    techstack: ['Express', 'Node.js', 'Next.js'],
    level: 'mid',
    questions: ['What is Node.js?'],
    finalized: false,
    createdAt: '2025-03-15T10:00:00Z',
  },
];

const Main = () => {
  return (
    <main className="px-6 py-12 md:px-16 space-y-16">
      {/* Hero CTA Section */}
      <section className="bg-blue-50 dark:bg-blue-900 p-8 rounded-xl shadow-md flex flex-col gap-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 dark:text-white">
          Get Interview Ready with AI
        </h2>
        <p className="text-lg text-blue-700 dark:text-gray-200">
          Practice real interview questions and get instant feedback.
        </p>
        <Button asChild className="w-fit">
          <Link href="/interview">Start an Interview</Link>
        </Button>
      </section>

      {/* Your Interviews Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Your Interviews
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} interviewId={interview.id} key={interview.id} />
          ))}
        </div>
      </section>

      {/* Take Interview Prompt Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Take an Interview
        </h2>
        <div className="text-gray-600 dark:text-gray-300">
          <p>There are no new interviews available at the moment.</p>
        </div>
      </section>
    </main>
  );
};

export default Main;
