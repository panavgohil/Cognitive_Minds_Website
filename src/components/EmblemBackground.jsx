import React from 'react';

const EmblemBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none flex items-center justify-center overflow-hidden">
      {/* Note the path starts with /emblem.svg, which looks in the public folder */}
      <img 
        src="/emblem.svg" 
        alt="Background Emblem" 
        className="w-[60vw] max-w-[600px] opacity-[0.03] animate-pulse-slow" 
      />
    </div>
  );
};

export default EmblemBackground;