import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Expertise from '@/components/Expertise';
import Stats from '@/components/Stats';
import ProcessTimeline from '@/components/ProcessTimeline';
import UseCases from '@/components/UseCases';
import WhyCloudAGI from '@/components/WhyCloudAGI';
import TechStack from '@/components/TechStack';
import ContactCTA from '@/components/CTA';
import Particles from '@/components/ui/Particles';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative w-full bg-white/5">
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <Particles
            className="absolute inset-0"
            quantity={300}
            staticity={50}
            color="#334155"
            ease={50}
            size={1.0}
            refresh
          />
        </div>
        <div className="relative z-10">
          <Problems />
          <Expertise />
          <Stats />
          <ProcessTimeline />
          <UseCases />
          <WhyCloudAGI />
          <TechStack />
          <ContactCTA />
        </div>
      </div>
    </>
  );
}
