import type { Metadata } from 'next';
import { PenTool, Wrench, ClipboardCheck, Radio, Flame, CheckCircle2 } from 'lucide-react';
import VisualProductGallery from '@/components/VisualProductGallery';

export const metadata: Metadata = {
  title: 'Commercial Fire Infrastructure & Services',
  description: 'Explore Parmic\'s comprehensive fire protection capabilities in Tasmania. Specializing in in-house CAD/BIM design, local Mornington workshop fabrication, advanced detection, and AS1851 maintenance.',
  openGraph: {
    title: 'Commercial Fire Infrastructure & Services | Parmic',
    description: 'End-to-end fire protection in Tasmania: Design, fabrication, installation, and AS1851 compliance.',
  }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            Comprehensive Fire Protection Services
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
            End-to-end fire infrastructure: Design, manufacture, install, and maintain across Tasmania.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: In-House Design & Engineering (The Foundation) */}
          <div className="bg-surface p-8 border border-border shadow-sm rounded-xl flex flex-col hover:border-[#F46707]/50 dark:hover:border-[#F46707] transition-colors">
            <div className="w-14 h-14 bg-blue-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6">
              <PenTool className="text-blue-600 dark:text-blue-400" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-foreground">In-House Design & CAD Engineering</h3>
            <p className="text-foreground/80 font-light leading-relaxed mb-6">
              Complete, compliant system design engineered locally in Tasmania to National Construction Code (NCC) and Australian Standards.
            </p>
            <ul className="space-y-3 mt-auto">
              {["BIM & 3D Spatial Coordination", "Hydraulic Calculations (AS2118)", "Fire Detection Design (AS1670)", "Building Act Accredited Practitioners", "Seamless Architect & Builder Integration"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#F46707] mt-1 shrink-0" size={18} />
                  <span className="text-foreground/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Local Manufacturing & Fabrication (Our Unique Advantage) */}
          <div className="bg-surface p-8 border border-border shadow-sm rounded-xl flex flex-col md:col-span-2 hover:border-[#F46707]/50 dark:hover:border-[#F46707] transition-colors">
            <div className="flex flex-col md:flex-row gap-8 items-start h-full">
              <div className="md:w-1/2 flex flex-col h-full">
                <div className="w-14 h-14 bg-orange-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="text-amber-600 dark:text-amber-400" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-foreground">In-House Workshop & Fabrication</h3>
                <p className="text-foreground/80 font-light leading-relaxed mb-6">
                  Unlike competitors who rely on mainland suppliers, we manufacture and fabricate custom fire infrastructure locally at our Mornington workshop, eliminating shipping delays and ensuring strict quality control.
                </p>
              </div>
              <div className="md:w-1/2 mt-auto w-full">
                <ul className="space-y-3">
                  {["Custom Pipe Threading & Roll Grooving", "In-House Welding & Bracketry Fabrication", "Custom Fire Pump Skids & Manifolds", "Rapid Prototyping for Complex Sites", "Zero Mainland Freight Bottlenecks"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#F46707] mt-1 shrink-0" size={18} />
                      <span className="text-foreground/80 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: AS1851 Maintenance & Digital Compliance */}
          <div className="bg-surface p-8 border border-border shadow-sm rounded-xl flex flex-col hover:border-[#F46707]/50 dark:hover:border-[#F46707] transition-colors">
            <div className="w-14 h-14 bg-green-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6">
              <ClipboardCheck className="text-green-600 dark:text-green-400" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-foreground">AS1851 Maintenance & Testing</h3>
            <p className="text-foreground/80 font-light leading-relaxed mb-6">
              Rigorous lifecycle management, defect rectification, and transparent compliance reporting for commercial and industrial facilities.
            </p>
            <ul className="space-y-3 mt-auto">
              {["Comprehensive AS1851 Routine Servicing", "Uptick-Powered Digital Asset Management", "Real-Time Defect Quoting & Rectification", "Annual Fire Safety Statements (AFSS)", "24/7 Rapid Emergency Response SLA"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#F46707] mt-1 shrink-0" size={18} />
                  <span className="text-foreground/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: Advanced Detection & Networked Alarms */}
          <div className="bg-surface p-8 border border-border shadow-sm rounded-xl flex flex-col hover:border-[#F46707]/50 dark:hover:border-[#F46707] transition-colors">
            <div className="w-14 h-14 bg-red-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6">
              <Radio className="text-red-600 dark:text-red-400" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-foreground">Advanced Detection Systems</h3>
            <p className="text-foreground/80 font-light leading-relaxed mb-6">
              Early warning and intelligent alarm networks designed for large-scale campuses, hospitals, and high-risk environments.
            </p>
            <ul className="space-y-3 mt-auto">
              {["Analogue Addressable Fire Panels", "Fibre Optically Connected Campus Systems", "Graphical PC Management Interfaces", "EWIS & BOWS Integration", "Thermal & Flame Detection Tech"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#F46707] mt-1 shrink-0" size={18} />
                  <span className="text-foreground/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 5: Suppression & Special Hazards */}
          <div className="bg-surface p-8 border border-border shadow-sm rounded-xl flex flex-col hover:border-[#F46707]/50 dark:hover:border-[#F46707] transition-colors">
            <div className="w-14 h-14 bg-purple-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6">
              <Flame className="text-purple-600 dark:text-purple-400" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-foreground">Special Hazard Suppression</h3>
            <p className="text-foreground/80 font-light leading-relaxed mb-6">
              Protecting mission-critical assets, data centers, and heavy industrial machinery with rapid-deployment suppression.
            </p>
            <ul className="space-y-3 mt-auto">
              {["VESDA Aspirating Smoke Detection", "Gaseous Suppression (Argonite, FM200, CO2)", "Water Mist & Deluge Systems", "Commercial Kitchen Exhaust Suppression", "Marine & Heavy Vehicle Systems"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#F46707] mt-1 shrink-0" size={18} />
                  <span className="text-foreground/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Visual Product Gallery */}
      <VisualProductGallery />

      {/* Trusted Partners Banner */}
      <section className="bg-surface border-t border-border py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-8">Trusted by Premium Industry Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["Ampac Technologies", "Reliable", "Nubco", "Flexistrut", "Reece"].map((partner, i) => (
              <div key={i} className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-foreground">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
