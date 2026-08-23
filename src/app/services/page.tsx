import { Droplets, BellRing, ShieldAlert, DoorClosed, CheckCircle2 } from 'lucide-react';
import VisualProductGallery from '@/components/VisualProductGallery';

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
            Install, maintain, and service across Tasmania.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Fire Sprinkler & Water Systems */}
          <div className="bg-surface p-8 border border-border shadow-sm rounded-xl flex flex-col hover:border-[#F46707]/50 dark:hover:border-[#F46707] transition-colors">
            <div className="w-14 h-14 bg-blue-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6">
              <Droplets className="text-blue-600 dark:text-blue-400" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 text-foreground">Fire Sprinkler & Water Systems</h3>
            <ul className="space-y-3 mt-auto">
              {["Automatic Sprinklers", "Wall Wetting & Deluge", "Water Mist", "Hydrant & Hose Reels", "Fire Pumps & Static Water Tanks"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#F46707] mt-1 shrink-0" size={18} />
                  <span className="text-foreground/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Fire Detection & Alarms */}
          <div className="bg-surface p-8 border border-border shadow-sm rounded-xl flex flex-col hover:border-[#F46707]/50 dark:hover:border-[#F46707] transition-colors">
            <div className="w-14 h-14 bg-red-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6">
              <BellRing className="text-red-600 dark:text-red-400" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 text-foreground">Fire Detection & Alarms</h3>
            <ul className="space-y-3 mt-auto">
              {["Addressable & Conventional Early Warning Smoke Detection", "Thermal Detection", "Flame Detection", "Domestic Alarms", "EWIS", "BOWS"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#F46707] mt-1 shrink-0" size={18} />
                  <span className="text-foreground/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: Passive Fire Protection */}
          <div className="bg-surface p-8 border border-border shadow-sm rounded-xl flex flex-col hover:border-[#F46707]/50 dark:hover:border-[#F46707] transition-colors">
            <div className="w-14 h-14 bg-orange-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6">
              <DoorClosed className="text-amber-600 dark:text-amber-400" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 text-foreground">Passive Fire Protection</h3>
            <ul className="space-y-3 mt-auto">
              {["Fire Doors", "Fire Separation", "Fire Shutters"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#F46707] mt-1 shrink-0" size={18} />
                  <span className="text-foreground/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Fire Suppression & Special Hazards */}
          <div className="bg-[#1A0F66] dark:bg-[#1A0F66] p-8 md:p-12 border border-slate-200 dark:border-white/10 shadow-sm rounded-xl flex flex-col md:col-span-2 lg:col-span-3">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="w-14 h-14 bg-slate-100 dark:bg-white/10 rounded-lg flex items-center justify-center mb-6">
                  <ShieldAlert className="text-[#F46707]" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-4 text-white dark:text-white">Fire Suppression & Special Hazards</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Advanced, specialized suppression systems designed for highly sensitive, marine, and extreme hazard environments.
                </p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Argonite", "FM200", "CO2 (Low & High Pressure)", "VESDA", "Pyrogen", "Chemical Powder & Foam", "Marine & Vehicle Suppression", "Portable Extinguishers"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 dark:bg-white/5 p-4 rounded-lg border border-white/10 dark:border-white/10 hover:border-[#F46707]/50 transition-colors">
                    <CheckCircle2 className="text-[#F46707] shrink-0" size={20} />
                    <span className="text-white dark:text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
