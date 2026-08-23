'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Flame, ShieldAlert, Wind, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Fire Sprinklers',
    description: 'Precision-engineered commercial and industrial sprinkler networks compliant with rigorous Australian standards.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  },
  {
    title: 'Fire Detection',
    description: 'Advanced early-warning alarm and detection grids designed to minimize response times for critical assets.',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80',
  },
  {
    title: 'Fire Suppression (Gas & Marine)',
    description: 'Specialized gas and marine suppression setups tailored for high-value and sensitive environments.',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=800&q=80',
  },
  {
    title: 'Special Hazards (FM200)',
    description: 'FM200, CO2, and foam-based suppression for data centers, power stations, and unique industrial risks.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    title: 'Passive Fire',
    description: 'Structural fire protection systems, fire doors, and compartmentalization to contain and prevent spread.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  }
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-surface text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="section-title mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">Core Competencies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Our Services</h2>
          </div>
          <p className="text-foreground/70 max-w-md font-light">
            Comprehensive lifecycle solutions—from schematic design and custom fabrication to meticulous ongoing maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={(el: HTMLDivElement | null) => { cardsRef.current[index] = el; }}
              className="group relative bg-background border border-border p-8 md:p-12 cursor-pointer overflow-hidden min-h-[360px]"
              whileHover="hover"
              initial="initial"
            >
              {/* Background Image on Hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              
              <div className="relative z-10 flex flex-col h-full">
                <service.icon size={40} className="text-accent mb-8" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
                <p className="text-foreground/70 font-light mb-12 flex-grow">{service.description}</p>
                
                <motion.div 
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent overflow-hidden"
                  variants={{
                    initial: { x: -10 },
                    hover: { x: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More 
                  <ArrowRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
