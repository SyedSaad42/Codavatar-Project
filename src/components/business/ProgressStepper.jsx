import React from 'react';

const steps = [
  { label: 'Business Type', isDone: true },
  { label: 'Business Details', isDone: true },
  { label: 'Authorized Representative', isDone: false },
  { label: 'Business Owners', isDone: false },
  { label: 'Company Directors', isDone: false },
  { label: 'Support Information', isDone: false },
  { label: 'Add Details', isDone: false },
  { label: 'Complete Registration', isDone: false }
];

const ProgressStepper = () => (
  <div className="w-full mb-8 px-8">
    {/* Green progress line */}
    <div className="h-2 bg-green-500 rounded-full mb-4" />
    
    {/* Labels */}
    <div className="flex justify-between">
      {steps.map((step, index) => (
        <div key={index} className="text-sm">
          <span className={step.isDone ? 'text-green-500' : 'text-gray-600'}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default ProgressStepper;