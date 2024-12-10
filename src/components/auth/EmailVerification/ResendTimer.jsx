import React, { useState, useEffect } from 'react';

const ResendTimer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(99);
  };

  return (
    <div className="text-center">
      {timer > 0 ? (
        <p className="text-gray-600">
          Wait {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
        </p>
      ) : (
        <p>
          Didn't receive a code?{' '}
          <button 
            onClick={handleResend}
            className="text-[#3B82F6] hover:underline font-normal"
          >
            Resend Code
          </button>
        </p>
      )}
    </div>
  );
};

export default ResendTimer;