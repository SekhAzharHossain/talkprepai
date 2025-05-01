import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-3xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
          Learn More About TalkPrepAI
        </h1>
        <p className="text-lg text-gray-300">
          TalkPrepAI is your personal AI voice interviewer to help you ace job interviews with confidence.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-4xl w-full mb-20 space-y-12">
        {[
          {
            icon: '🎤',
            title: 'Speak Naturally',
            desc: 'Answer questions with your voice, just like a real interview. Our AI understands and evaluates your responses.'
          },
          {
            icon: '🧠',
            title: 'Instant Feedback',
            desc: 'Get real-time feedback on clarity, tone, and confidence so you can improve continuously.'
          },
          {
            icon: '🚀',
            title: 'Build Confidence',
            desc: 'Track your progress and grow comfortable facing real-world interview scenarios.'
          }
        ].map(({ icon, title, desc }) => (
          <div key={title} className="space-y-2">
            <h2 className="text-2xl font-semibold">{icon} {title}</h2>
            <p className="text-gray-400">{desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-5xl mb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">What People Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              name: 'Sarah M.',
              text: 'TalkPrepAI helped me feel so much more confident before my frontend interviews!'
            },
            {
              name: 'James K.',
              text: 'The feedback on tone and pacing was a game changer. Highly recommended.'
            },
            {
              name: 'Anjali R.',
              text: 'Super intuitive and helpful. It felt like practicing with a real interviewer.'
            }
          ].map(({ name, text }) => (
            <div key={name} className="bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="text-gray-300 italic mb-4">“{text}”</p>
              <p className="text-blue-400 font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="w-full max-w-4xl mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Is TalkPrepAI free to use?',
              a: 'You get 3 free interview practices. After that, a subscription is required.'
            },
            {
              q: 'What kind of interviews can I practice?',
              a: 'You can practice technical, behavioral, or custom role-specific interviews.'
            },
            {
              q: 'Do I need to install anything?',
              a: 'No installation required. TalkPrepAI works right in your browser.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-gray-800 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{q}</h3>
              <p className="text-gray-400">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
