"use client";
import React from 'react';
import Image from 'next/image';

interface Step {
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    title: 'Install Our The App',
    description: 'Download our App from either the Playstore or App Store',
    icon: '/1.svg',
  },
  {
    title: 'Set Up Your Account',
    description: 'Go through a simple sign up process to sync your attendence',
    icon: '/2.svg',
  },
  {
    title: 'Bunk Time',
    description: 'You can now see your timetable and plan for upcoming classes',
    icon: '/3.svg',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-black text-white py-3 px-8 mb-3">
      <h1 className="text-6xl font-bold text-center mb-2">It's pretty simple</h1>
      <h2 className="text-5xl font-semibold text-center mb-20">
        How it <span className="text-purple-400">works</span>
      </h2>
      
      <div className="flex justify-between items-start relative max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Step 
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
            {index < steps.length - 1 && <DottedLine isReverse={index % 2 !== 0} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Step: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col gap-3 items-center max-w-[300px] z-10">
    <div>
      <Image src={icon} alt={title} width={60} height={60}  />
    </div>
    <h4 className="text-purple-400 text-xl font-semibold mb-3 text-center">{title}</h4>
    <p className="text-sm text-center text-gray-300">{description}</p>
  </div>
);

const DottedLine: React.FC<{ isReverse: boolean }> = ({ isReverse }) => (
  <div className={`absolute top-10 w-1/3 ${isReverse ? '-mt-4' : 'mt-4'}`}>
    <svg width="347" height="59" viewBox="0 0 347 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 49C47.986 18.8203 105.948 1 168.658 1C231.368 1 289.331 18.8203 336.317 49" stroke="#DEE7EE" stroke-dasharray="8 8"/>
<path d="M343.14 53.9028L332.335 52.6307L339.02 45.2297L343.14 53.9028Z" fill="#DEE7EE"/>
</svg>

  </div>
);

export default HowItWorks;