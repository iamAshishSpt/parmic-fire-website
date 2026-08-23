"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "UTAS Student Accommodation",
    category: "Commercial",
    image: "/utas-accomodation.jpg",
  },
  {
    title: "The Icon Complex Hobart",
    category: "Mixed-Use Development",
    image: "/icon-complex.jpeg",
  },
  {
    title: "Pumphouse Point Lake St Clair",
    category: "Hospitality / Heritage",
    image: "/pumphouse.webp",
  },
  {
    title: "Vodafone Call Centre",
    category: "Corporate Infrastructure",
    image: "/vodaphone-call-center.jpg",
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-card");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollWrapperRef.current?.offsetWidth,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="h-screen bg-background flex flex-col justify-center overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-24 mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2 h-2 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Portfolio
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
          Featured Projects
        </h2>
      </div>

      <div ref={scrollWrapperRef} className="flex w-[400vw] h-[60vh]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card w-screen h-full px-6 md:px-12 lg:px-24 flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-6xl group overflow-hidden bg-surface">
              {/* Image using Unsplash placeholders for now */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
                <div>
                  <p className="text-accent font-bold tracking-widest uppercase text-sm mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight max-w-2xl">
                    {project.title}
                  </h3>
                </div>
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cursor-pointer">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
