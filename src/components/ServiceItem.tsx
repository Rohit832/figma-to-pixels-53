import React from 'react';

interface ServiceItemProps {
  icon: string;
  title: string;
  subtitle?: string;
  description?: string;
  bulletPoints?: string[];
  className?: string;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  subtitle,
  description,
  bulletPoints,
  className = ''
}) => {
  return (
    <article className={`flex flex-col items-start gap-[5px] self-stretch relative ${className}`}>
      <div className="flex items-start gap-2 self-stretch relative max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-2.5">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-7 h-[27px] aspect-[28/27] relative"
        />
        <div className="text-black text-[8px] font-bold tracking-[0.578px] relative">
          <div className="text-base mb-0.5">{title}</div>
          {subtitle && (
            <div className="text-[8px]">{subtitle}</div>
          )}
        </div>
      </div>
      
      {description && (
        <div className="flex justify-center items-center gap-2.5 relative pl-[39px] pr-2.5 py-2.5 max-sm:p-2.5">
          <p className="w-[234px] text-[#646A74] text-xs font-normal tracking-[0.84px] relative max-sm:w-full max-sm:text-[11px] max-sm:text-center">
            {description}
          </p>
        </div>
      )}
      
      {bulletPoints && bulletPoints.map((point, index) => (
        <div key={index} className="flex items-start gap-[17px] relative pl-[55px] max-sm:gap-2.5 max-sm:pl-5">
          <div className="flex pt-[5px] items-center gap-2.5 relative">
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="8" r="3" fill="black" />
            </svg>
          </div>
          <p className="w-[200px] text-[#646A74] text-[10px] font-normal tracking-[0.7px] relative max-sm:w-full max-sm:text-[9px]">
            {point}
          </p>
        </div>
      ))}
    </article>
  );
};
