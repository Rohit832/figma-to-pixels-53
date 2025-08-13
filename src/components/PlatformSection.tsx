import React from 'react';
import { ProgressIndicator } from './ProgressIndicator';
import { ServiceItem } from './ServiceItem';
import { SpeechBubble } from './SpeechBubble';

export const PlatformSection: React.FC = () => {
  const services = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b506b243545820787ad0cfc6ec7688e8d3400891?width=56",
      title: "UX Audits",
      subtitle: "Deep-dive analysis of your current user experience",
      description: "Weekly virtual groups, consisting of 5-10 students and a licensed clinician, custom-tailored to each student's needs, lived experiences, and personality type.",
      bulletPoints: [
        "Our program, rooted in the latest evidence-based practices, helps students build an inclusive community that understands the complexity of their experiences and supports them as they move forward."
      ]
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/37fea2b38320c9f0092d80a36a1f20f4379084a1?width=56",
      title: "Full UX Revamps",
      subtitle: "Complete redesign for maximum conversion impact"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/7fcbfd6a3192db6879224752765a29d84b5e2f7b?width=56",
      title: "Landing Page Fixes",
      subtitle: "Targeted improvements for better first impressions"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/0ca520371b87e50f369694c101304dbe76059ce0?width=56",
      title: "1:1 check-ins Session"
    }
  ];

  return (
    <section className="max-w-none flex items-center gap-[18px] w-[944px] h-[573px] mx-auto my-0 p-5 max-md:max-w-[991px] max-md:flex-col max-md:w-full max-md:h-auto max-md:gap-[30px] max-md:p-5 max-sm:max-w-screen-sm max-sm:gap-5 max-sm:p-[15px]">
      <div className="flex w-[327px] items-center gap-[5px] relative max-md:w-full max-md:max-w-[500px]">
        <ProgressIndicator />
        
        <div className="flex w-[271px] flex-col items-start gap-[45px] shrink-0 relative max-md:w-full">
          <header className="self-stretch text-black text-[19px] font-normal tracking-[1.344px] relative max-sm:text-base max-sm:text-center">
            One platform multiple touchpoints
          </header>
          
          <div className="flex flex-col items-start gap-[38px] self-stretch relative pl-10 max-sm:gap-[25px] max-sm:pl-5">
            <h1 className="w-[260px] text-black text-[27px] font-normal leading-6 relative max-md:w-full max-md:text-2xl max-md:leading-[22px] max-sm:text-xl max-sm:leading-5 max-sm:text-left">
              We support students, no matter what they're dealing with.
            </h1>
            
            <div className="absolute top-[-30px] right-[-50px] z-[1] max-md:hidden">
              <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5C15 5 25 15 45 25" stroke="#000" strokeWidth="2" fill="none" />
                <path d="M40 20L45 25L40 30" stroke="#000" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            <div className="flex flex-col items-start gap-5 self-stretch relative">
              {services.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  description={service.description}
                  bulletPoints={service.bulletPoints}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <SpeechBubble />
    </section>
  );
};
