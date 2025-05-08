// src/components/ui/spinner.tsx

import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';  // Size prop to control the spinner's size
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md' }) => {
  let sizeClass = '';
  switch (size) {
    case 'sm':
      sizeClass = 'w-4 h-4';
      break;
    case 'lg':
      sizeClass = 'w-8 h-8';
      break;
    default:
      sizeClass = 'w-6 h-6';
  }

  return (
    <div className={`border-t-2 border-gray-600 rounded-full animate-spin ${sizeClass}`} />
  );
};

export default Spinner;
