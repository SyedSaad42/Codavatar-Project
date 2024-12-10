import React from 'react';

const OTPInput = ({ values, onChange, onKeyDown }) => (
  <div className="flex justify-center items-center gap-2 my-8">
    {values.map((value, index) => (
      <React.Fragment key={index}>
        {index === 3 && <div className="w-4 h-[1px] bg-gray-300" />}
        <input
  name={`otp-${index}`}
  type="text"
  maxLength={1}
  value={value}
  onChange={(e) => onChange(index, e.target.value)}
  onKeyDown={(e) => onKeyDown(index, e)}
  className="w-12 h-12 border border-gray-200 rounded-lg text-center text-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
  autoFocus={index === 0} // Add this line
/>
      </React.Fragment>
    ))}
  </div>
);

export default OTPInput;