import React from 'react';

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
      <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent" />
    </div>
    <span className="text-red-600 font-bold text-xl">Logoipsum</span>
  </div>
);