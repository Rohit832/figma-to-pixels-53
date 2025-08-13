import React from 'react';
import { ProgressIndicator } from './ProgressIndicator';
import { ServiceItem } from './ServiceItem';
import { SpeechBubble } from './SpeechBubble';
export const PlatformSection: React.FC = () => {
  const services = [{
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/b506b243545820787ad0cfc6ec7688e8d3400891?width=56",
    title: "UX Audits",
    subtitle: "Deep-dive analysis of your current user experience",
    description: "Weekly virtual groups, consisting of 5-10 students and a licensed clinician, custom-tailored to each student's needs, lived experiences, and personality type.",
    bulletPoints: ["Our program, rooted in the latest evidence-based practices, helps students build an inclusive community that understands the complexity of their experiences and supports them as they move forward."]
  }, {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/37fea2b38320c9f0092d80a36a1f20f4379084a1?width=56",
    title: "Full UX Revamps",
    subtitle: "Complete redesign for maximum conversion impact"
  }, {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/7fcbfd6a3192db6879224752765a29d84b5e2f7b?width=56",
    title: "Landing Page Fixes",
    subtitle: "Targeted improvements for better first impressions"
  }, {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/0ca520371b87e50f369694c101304dbe76059ce0?width=56",
    title: "1:1 check-ins Session"
  }];
  return <section className="container mx-auto w-full h-auto my-0 p-5 md:p-6 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8">
      <div className="flex items-center gap-[5px] relative w-full lg:w-[327px] lg:max-w-[500px] mx-auto lg:mx-0">
        <ProgressIndicator />
        
        <div className="flex w-full lg:w-[271px] flex-col items-center lg:items-start gap-[45px] shrink-0 relative">
          <header className="w-full text-black text-[19px] font-normal tracking-[1.344px] relative max-sm:text-base text-center lg:text-left">
            One platform multiple touchpoints
          </header>
          
          <div className="flex flex-col items-center lg:items-start gap-[38px] self-stretch relative lg:pl-10 max-sm:gap-[25px] max-sm:pl-5">
            <h1 className="w-full lg:w-[260px] text-black text-[27px] font-normal leading-6 relative md:text-2xl md:leading-[22px] max-sm:text-xl max-sm:leading-5 lg:text-left text-left">
              We support students, no matter what they're dealing with.
            </h1>
            
            <div className="absolute top-[-30px] right-[-50px] z-[1] max-md:hidden">
              
            </div>
            
            <div className="flex flex-col items-center lg:items-start gap-5 self-stretch relative">
              {services.map((service, index) => <ServiceItem key={index} icon={service.icon} title={service.title} subtitle={service.subtitle} description={service.description} bulletPoints={service.bulletPoints} />)}
            </div>
          </div>
        </div>
      </div>
      
      <SpeechBubble className="w-full mx-auto lg:mx-0 lg:flex-1" />
    </section>;
};