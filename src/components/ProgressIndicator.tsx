import React from 'react';

interface ProgressIndicatorProps {
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ className = '' }) => {
  return (
    <div className={`hidden lg:flex items-center gap-2.5 relative pt-[60px] ${className}`}>
      <div className="w-1 h-[513px] relative bg-gray-200" />
      <div className="w-1 h-[234px] absolute bg-[#FF9865] left-0 top-[146px]" />
    </div>
  );
};
