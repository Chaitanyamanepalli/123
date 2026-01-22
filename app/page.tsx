import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Expertise from '@/components/Expertise';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/CTA';
import Particles from '@/components/ui/Particles';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative w-full bg-background/50">
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <Particles
            className="absolute inset-0"
            quantity={80}
            staticity={30}
            ease={50}
            size={1.6}
            color="#1e293b" // Slate-800 (Dark visible color)
            refresh
          />
        </div>
        <div className="relative z-10 space-y-24 pb-24">
          <Problems />
          <Expertise />
          <Team />
          <FAQ />
          <ContactCTA />
        </div>
      </div>
    </>
  );
}
