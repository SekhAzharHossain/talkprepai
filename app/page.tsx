
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
<div className="font-sans bg-gray-50 dark:bg-gray-950 dark:text-white min-h-screen flex flex-col">
      {/* Header */}
      <NavBar/>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-20 py-16">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Ace Your Interviews<br />with AI-Powered Voice Practice
          </h1>
          <p className="text-gray-600 text-lg dark:text-gray-300">
            Talk naturally, get real-time feedback, and step confidently into your next opportunity.
          </p>
          <div className="space-x-4">
            <Link href={'/main'} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 border-blue-500 border-2">
            
              Start Practicing
            
            </Link>
           
            <Link href={'/learn-more'} className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700">
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          {/* Hero illustration */}
          {/* <Image
            src="/microphone-illustration.svg"
            alt="Voice Interview"
            width={320}
            height={320}
            className="w-80"
          /> */}
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="px-6 md:px-20 py-16 bg-white dark:bg-black text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-5xl">🎤</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Talk</h3>
            <p className="text-gray-600 dark:text-gray-400">Answer real interview questions by speaking naturally.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">🧠</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Analyze</h3>
            <p className="text-gray-600 dark:text-gray-400">AI evaluates your tone, clarity, and confidence instantly.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Improve</h3>
            <p className="text-gray-600 dark:text-gray-400">Get actionable feedback and boost your interview skills fast.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-20 py-16 bg-blue-600 dark:bg-gray-950 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Nail Your Next Interview?</h2>
        <p className="mb-8 text-lg">Practice smarter with TalkPrepAI. Get started for free today!</p>
        <Link href={'/main'} className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600">

          Get Started Free
          
        </Link>
        
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-6 bg-white dark:bg-black text-gray-500 dark:text-gray-400 text-sm text-center">
        © 2025 TalkPrepAI. All rights reserved.
      </footer>
    </div>
  );
}
