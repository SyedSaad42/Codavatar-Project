import React, { useState } from 'react';
import { Logo } from '../../common/Logo';
import LocationCard from '../../layout/LocationCard';
import OTPInput from './OTPInput';
import ResendTimer from './ResendTimer';
import { useNavigate } from 'react-router-dom';

const BackButton = () => (
  <button className="text-white/70 hover:text-white flex items-center gap-2 transition-colors absolute top-8 left-8">
    <span>←</span> Back
  </button>
);

const EmailVerification = () => {
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);

  const handleVerify = () => {
    navigate('/business-details');
  };

  const handleInputChange = (index, value) => {
    if (!/^[0-9]*$/.test(value)) return;
    const newValues = [...otpValues];
    newValues[index] = value;
    setOtpValues(newValues);

    if (value && index < 5) {
      const nextInput = document.querySelector(`input[name="otp-${index + 1}"]`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      const prevInput = document.querySelector(`input[name="otp-${index - 1}"]`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className="min-h-screen custom-bg flex">
      {/* Left Side - Layout Cards */}
      <div className="w-1/2 relative flex flex-col items-center justify-center p-8">
        <BackButton />
        
        <div className="grid grid-cols-2 gap-12 w-full max-w-[400px]">
          <LocationCard
            flag="/img/singapor.png"
            country="Singapore"
            type="Head Office"
            company="XYZ Pvt. Ltd."
            address="Road to nowhere, 06-404"
            className="rounded-full"
          />
          <LocationCard
            flag="/img/hongkong.png"
            country="Hong Kong"
            type="Branches"
            company="XYZ Pte. Ltd."
            address="The Infinite Loop Office, 404 Timeout Plaza"
            className="rounded-full"
          />
          <LocationCard
            flag="/img/usa.png"
            country="USA"
            type="Branches"
            company="XYZ Inc."
            address="The Infinite Loop Office, 404 Timeout Plaza"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Right Side - Verify your Email */}
      <div className="w-1/2 p-8 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full">
          <Logo />
          <h1 className="text-2xl font-bold mb-2">Verify your Email</h1>
          <p className="text-gray-600">
            Please enter the 6 digit code we just sent to s********a@xyz.com
          </p>
          
          <div className="flex items-center justify-center mb-6">
            <OTPInput 
              values={otpValues}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button
            onClick={handleVerify}
            className="w-full bg-red-500/90 hover:bg-red-500 text-white rounded-xl py-4 mb-4 transition-colors"
          >
            Verify
          </button>

          <ResendTimer />

          <div className="text-center text-sm text-gray-500 mt-6">
            By continuing, you're agreeing to <a href="#" className="text-blue-500">Nobody's Terms of Service</a>,
            <a href="#" className="text-blue-500"> Privacy Policy</a> and <a href="#" className="text-blue-500">Cookie Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;