"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const projects = [
  { id: 1, sector: "Health", title: "Royal Hobart Hospital Redevelopment", location: "Hobart CBD" },
  { id: 2, sector: "Health", title: "Launceston General Hospital Redevelopment", location: "Launceston" },
  { id: 3, sector: "Health", title: "Numerous Aged Care Facilities", location: "Tasmania-wide" },
  { id: 4, sector: "Education", title: "UTAS 430-Apartment Student Accommodation", location: "Hobart" },
  { id: 5, sector: "Retail & Commercial", title: "The Icon Complex & Myer Store", location: "Hobart CBD" },
  { id: 6, sector: "Retail & Commercial", title: "Wellington Centre (13-storey tower)", location: "Hobart CBD" },
  { id: 7, sector: "Retail & Commercial", title: "Vodafone Flagship Call Centre", location: "Hobart" },
  { id: 8, sector: "Retail & Commercial", title: "Bunnings Superstores", location: "Statewide" },
  { id: 9, sector: "Hospitality", title: "Pumphouse Point Wilderness Retreat", location: "Lake St Clair" },
  { id: 10, sector: "Hospitality", title: "58 Collins Street Hotel", location: "Hobart CBD" },
  { id: 11, sector: "Hospitality", title: "Savoy Hotel", location: "Hobart" },
  { id: 12, sector: "Industrial & Manufacturing", title: "Lion Co 'Project Frost' Dairy Expansion", location: "Burnie" },
  { id: 13, sector: "Industrial & Manufacturing", title: "Ta Ann Veneer Mills", location: "Smithton" },
  { id: 14, sector: "Industrial & Manufacturing", title: "Tas Alkaloids", location: "Westbury" }
];

const sectors = ["All sectors", "Health", "Education", "Retail & Commercial", "Hospitality", "Industrial & Manufacturing"];

export default function ProjectsPage() {
  const [activeSector, setActiveSector] = useState("All sectors");

  const filteredProjects = activeSector === "All sectors" 
    ? projects 
    : projects.filter(project => project.sector === activeSector);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            Sector Portfolio
          </h1>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
            A selection of major infrastructure and commercial projects delivered across Tasmania.
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="px-6 md:px-12 lg:px-24 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={
                activeSector === sector
                  ? "bg-[#F46707] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                  : "bg-transparent border border-white/10 text-white/70 hover:bg-white/5 px-5 py-2 rounded-full text-sm font-medium transition-colors"
              }
            >
              {sector}
            </button>
          ))}
        </div>
      </section>

      {/* Project Card Grid */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0f1423] border border-white/5 p-6 rounded-xl relative overflow-hidden flex flex-col h-full"
                >
                  <div className="absolute top-0 left-6 w-8 h-[3px] bg-[#F46707]"></div>
                  
                  <div className="text-[#F46707] text-xs font-bold uppercase tracking-wider mb-3 px-2 py-1 bg-[#F46707]/10 rounded-md w-fit">
                    {project.sector}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-auto leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="text-white/50 text-sm mt-6 flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
