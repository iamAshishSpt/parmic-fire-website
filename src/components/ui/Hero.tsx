'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDownRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(headlineRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
      })
      .from(subheadRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.hero-decorator', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6');
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden isolate bg-black">
      {/* Video Background */}
      <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      <div className="relative z-20 w-full px-6 md:px-12 lg:px-24 flex flex-col items-start justify-center text-left max-w-7xl pt-16">
        <div className="hero-decorator h-1 w-16 bg-[#F46707] mb-6 self-start" />
        <h1 
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[1.1] tracking-tighter mb-4 text-white text-left self-start"
        >
          Engineered Fire <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Protection for</span> <br className="hidden md:block" />
          Critical Infrastructure.
        </h1>
        <p 
          ref={subheadRef}
          className="text-base sm:text-lg md:text-2xl text-neutral-300 max-w-2xl font-light leading-relaxed mb-6 text-left self-start"
        >
          Design, Fabrication, Installation, and Servicing of advanced fire detection and suppression systems in Tasmania.
        </p>
        
        <div className="flex justify-start self-start">
          <div 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-white hover:text-[#F46707] transition-colors cursor-pointer w-fit group"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:border-[#F46707] transition-colors">
              <ArrowDownRight size={20} />
            </div>
            Explore Our Capabilities
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70 hover:text-[#F46707] transition-colors cursor-pointer z-20"
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
