"use client";

import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

const teamMembers = [
  { name: "Sarah Jenkins", role: "General Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
  { name: "Emma Davis", role: "Finance Officer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80" },
  { name: "Ashish Sapkota", role: "Service Administrator", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
  { name: "James Wilson", role: "Senior CAD Designer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" },
  { name: "Thomas Brown", role: "Junior CAD Designer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80" },
  { name: "Michael Clarke", role: "Technician Supervisor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" },
];

export default function TeamCarousel() {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Smooth infinite scrolling logic
  useAnimationFrame((time, delta) => {
    if (isHovered || isDragging) return;
    
    // Adjust speed here (higher = faster)
    let moveBy = 0.5 * (delta / 16); 
    
    // Wrap around logic (assuming each card + gap is ~304px wide)
    // 6 cards * 304px = ~1824px before we need to loop
    let newX = baseX.get() - moveBy;
    if (newX <= -1824) {
      newX += 1824;
    }
    baseX.set(newX);
  });

  // Duplicate array for infinite scroll illusion
  const duplicatedTeam = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <div 
      className="w-full relative overflow-hidden bg-[#1A0F66]/30 py-16 my-12"
      style={{ clipPath: "ellipse(150% 100% at 50% 50%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-foreground">Our Mornington Operations Hub</h2>
        <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">A dedicated core team structured to deliver seamless end-to-end fire protection.</p>
      </div>

      <div 
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          ref={containerRef}
          className="flex gap-6 px-4"
          style={{ x: baseX }}
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {duplicatedTeam.map((member, index) => (
            <div 
              key={index} 
              className="w-[280px] shrink-0 h-[380px] relative rounded-2xl overflow-hidden group border border-white/10 shadow-lg"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-[#F46707] text-xs font-bold uppercase tracking-wider">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
