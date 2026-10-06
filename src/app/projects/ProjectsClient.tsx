"use client";

import React, { useState } from 'react';
import { MapPin, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  // Existing Projects
  { name: "UTAS 430-Apartment Student Accommodation", location: "Hobart CBD", sector: "Education" },
  { name: "The Icon Complex & Myer Store", location: "Hobart CBD", sector: "Retail & Hospitality" },
  { name: "Pumphouse Point Wilderness Retreat", location: "Lake St Clair", sector: "Retail & Hospitality" },
  { name: "Wellington Centre 13-Storey Tower", location: "Hobart", sector: "Government & Corporate" },
  { name: "Vodafone's Flagship Australian Call Centre", location: "Hobart", sector: "Government & Corporate" },
  { name: "Lion Co's 'Project Frost'", location: "Burnie", sector: "Industrial" },
  { name: "Launceston General Hospital Redevelopment", location: "Launceston", sector: "Health" },
  { name: "Royal Hobart Hospital Redevelopment", location: "Hobart", sector: "Health" },
  { name: "Bunnings Superstores", location: "Glenorchy & Kingston", sector: "Retail & Hospitality" },
  { name: "Ta Ann's Veneer Mills", location: "Geeveston & Smithton", sector: "Industrial" },
  
  // New Contracts from Spreadsheet Data
  { name: "Kalis Property Group (Black Buffalo & More)", location: "Statewide", sector: "Retail & Hospitality" },
  { name: "Tasmanian Local Government Councils", location: "Circular Head & Waratah-Wynyard", sector: "Government & Corporate" },
  { name: "Leighland Christian Schools", location: "Burnie & Ulverstone", sector: "Education" },
  { name: "ANZ Bank Branches", location: "Kings Meadows & Statewide", sector: "Government & Corporate" },
  { name: "Mitre 10 Hardware Centers", location: "Hobart & Sorell", sector: "Retail & Hospitality" },
  { name: "Corumbene Nursing Homes", location: "Derwent Valley", sector: "Health" }
];

const sectors = ["All Sectors", "Education", "Retail & Hospitality", "Government & Corporate", "Industrial", "Health"];

export default function ProjectsClient() {
  const [activeSector, setActiveSector] = useState("All Sectors");

  const filteredProjects = activeSector === "All Sectors"
    ? projects
    : projects.filter(project => project.sector === activeSector);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-40 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            Major Projects
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
            A decade of protecting Tasmania’s most critical infrastructure and premium developments.
          </p>
        </div>
      </section>

      {/* High-Impact Metrics Banner */}
      <section className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#F46707] rounded-2xl p-8 text-white shadow-xl shadow-[#F46707]/20">
            <div className="text-center flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black tracking-tight mb-2">30+</div>
              <div className="text-xs md:text-sm uppercase tracking-wider font-bold opacity-90 text-center">Years Experience</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black tracking-tight mb-2">24/7</div>
              <div className="text-xs md:text-sm uppercase tracking-wider font-bold opacity-90 text-center">Emergency Support</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">100%</h4>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/90">Tasmanian Owned</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black tracking-tight mb-2">500+</div>
              <div className="text-xs md:text-sm uppercase tracking-wider font-bold opacity-90 text-center">Sites Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-wrap gap-3 mb-10">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={
                  activeSector === sector
                    ? "bg-[#F46707] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                    : "bg-transparent border border-border text-foreground/70 hover:text-foreground hover:border-[#F46707]/50 px-5 py-2 rounded-full text-sm font-medium transition-colors"
                }
              >
                {sector}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.name} 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-surface border border-border p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F46707] hover:shadow-xl flex flex-col h-full"
                >
                  {/* Architectural styling accent */}
                  <div className="w-8 h-1 bg-border group-hover:bg-[#F46707] group-hover:w-16 transition-all duration-500 mb-8" />
                  
                  <div className="text-[#F46707] text-xs font-bold uppercase tracking-wider mb-2 px-2 py-1 bg-[#F46707]/10 rounded-md w-fit">
                    {project.sector}
                  </div>

                  <Building2 className="text-foreground/20 mb-4 group-hover:text-[#F46707]/40 transition-colors" size={56} strokeWidth={1} />
                  
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 flex-grow text-foreground">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-auto pt-6 border-t border-border group-hover:border-[#F46707]/30 transition-colors">
                    <MapPin size={16} className="text-[#F46707]" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
                      {project.location}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {/* "And Many More" Concluding Card */}
              {activeSector === "All Sectors" && (
                <motion.div 
                  key="many-more"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-surface border border-border p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F46707] hover:shadow-xl flex flex-col h-full justify-center items-center text-center"
                >
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4 text-[#F46707]">
                    And Many More...
                  </h3>
                  <p className="text-foreground/80 font-medium">
                    Over 3 decades of protecting Tasmanian infrastructure.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
