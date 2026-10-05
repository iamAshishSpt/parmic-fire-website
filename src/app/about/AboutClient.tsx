"use client";

import { Factory, CheckCircle2, ShieldCheck, Award, FileText, ClipboardCheck, Zap, Briefcase, DraftingCompass, Users, Wrench } from 'lucide-react';
import TeamCarousel from '@/components/ui/TeamCarousel';

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            Tasmanian Owned & Operated Since 1992
          </h1>
          <p className="text-xl md:text-3xl font-medium text-[#F46707] mb-6">
            Proudly employing a dedicated team of over 25 industry professionals across the state.
          </p>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed max-w-4xl mx-auto italic">
            "To be recognised by the Fire Industry, our customers, and the community at having achieved a level of excellence in the Design, Fabrication, Installation and Servicing of Fire Detection and Protection Systems."
          </p>
        </div>
      </section>

      {/* Our Workshop & Design Office Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-[#F46707]" />
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-foreground">Our Workshop & Design Office</h2>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Operating from our expansive Mornington facility, purpose-built in 1996, we house one of Tasmania's only fully integrated design and fabrication hubs. By keeping manufacturing local, we completely eliminate mainland shipping delays and supply chain bottlenecks for our clients.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              A critical advantage of our infrastructure is the seamless communication between our in-house CAD/BIM engineering team and the adjacent fabrication workshop. This physical proximity ensures that complex designs to AS 1670 and NCC standards are executed with absolute precision, and any technical modifications are resolved on the spot.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full bg-background p-8 md:p-10 border border-border shadow-sm rounded-xl">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-8 flex items-center gap-3">
              <Factory className="text-[#F46707]"/> 
              Facility Capabilities
            </h3>
            <ul className="space-y-5">
              {[
                "In-house CAD drafting & 3D BIM spatial coordination",
                "Custom plasma cutting profile/branch machine",
                "Custom mobile welding and cutting benches",
                "Upgraded manual handling (reducing lifts by 66%)",
                "In-house fume extraction for OH&S best practice"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#F46707] mt-1 shrink-0" size={20} />
                  <span className="text-foreground/90 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Mornington Team Section */}
      <TeamCarousel />

      {/* Service Commitment & Compliance Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-foreground mb-12">Service Commitment & Compliance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-10 bg-surface border border-border rounded-xl hover:-translate-y-1 transition-transform duration-300">
              <FileText className="text-[#F46707] mb-6" size={40} strokeWidth={1.5} />
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4">Regulatory Adherence</h3>
              <p className="text-foreground/80 leading-relaxed">
                Uncompromising commitment to AS 1851-2012 maintenance standards alongside full adherence to the Tasmanian Building Act 2000 and Building Regulations 2004.
              </p>
            </div>

            <div className="p-10 bg-surface border border-border rounded-xl hover:-translate-y-1 transition-transform duration-300">
              <ClipboardCheck className="text-[#F46707] mb-6" size={40} strokeWidth={1.5} />
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4">Essential Services</h3>
              <p className="text-foreground/80 leading-relaxed">
                Full capacity and legal authorization to complete, certify, and fulfill Essential Services Form 46 and Occupancy Form 56 statutory requirements across Tasmania.
              </p>
            </div>

            <div className="p-10 bg-surface border border-border rounded-xl hover:-translate-y-1 transition-transform duration-300">
              <Zap className="text-[#F46707] mb-6" size={40} strokeWidth={1.5} />
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4">Specialized Licensing</h3>
              <p className="text-foreground/80 leading-relaxed">
                All field technicians hold active FPAS accreditation and Extinguishing Agent Handling Licences (EAHL) required for the safe handling of ozone-depleting systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1A0F66] dark:bg-[#1A0F66] border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck className="text-[#F46707]" size={40} />
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white dark:text-white">AS/NZS ISO 9001 Quality Assured</h2>
            </div>
            <p className="text-lg text-white/80 dark:text-white/80 font-light leading-relaxed mb-8">
              Quality is embedded in everything we do. Our objectives ensure we continuously meet and exceed the rigorous demands of the fire protection industry.
            </p>
            
            <ul className="space-y-4">
              {[
                "Continuous improvement of processes and systems",
                "Fostering a culture of teamwork and accountability",
                "Strict adherence to all OH&S compliance and regulations",
                "Delivering uncompromised workmanship and attention to detail"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#F46707] mt-1 shrink-0" size={20} />
                  <span className="text-white/90 dark:text-white/90 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white/10 dark:bg-white/10 p-10 rounded-lg border border-white/20 dark:border-white/20 backdrop-blur-sm text-center shadow-sm dark:shadow-none">
              <Award className="text-[#F46707] mx-auto mb-4" size={64} strokeWidth={1} />
              <div className="text-6xl font-black text-white dark:text-white mb-4 tracking-tighter">4.4 <span className="text-3xl text-white/60 dark:text-white/60">/ 5</span></div>
              <h3 className="text-xl font-bold uppercase tracking-widest text-[#F46707] mb-4">Average Client Rating</h3>
              <p className="text-sm text-white/70 dark:text-white/70 font-light leading-relaxed">
                This prestigious rating is rigorously calculated based on 5 years of post-project Performance Rating Sheets, strictly covering workmanship, attention to detail, communication, and OH&S execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
