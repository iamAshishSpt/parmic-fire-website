import { Hero } from "@/components/ui/Hero";
import { Services } from "@/components/ui/Services";
import { Projects } from "@/components/ui/Projects";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Star,
  Map,
  PenTool,
  Hammer,
  Wrench,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full relative">
      <Hero />

      {/* Trust Bar / Statistics Strip */}
      <section className="bg-[#F46707] text-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
            <Calendar size={32} className="mb-4 text-white/80" />
            <span className="font-bold uppercase tracking-wider text-lg">
              Operating Since 1992
            </span>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
            <ShieldCheck size={32} className="mb-4 text-white/80" />
            <span className="font-bold uppercase tracking-wider text-lg">
              AS/NZS ISO 9001 Certified
            </span>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
            <Star size={32} className="mb-4 text-white/80" />
            <span className="font-bold uppercase tracking-wider text-lg">
              4.4/5 Client Satisfaction Rating
            </span>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
            <Map size={32} className="mb-4 text-white/80" />
            <span className="font-bold uppercase tracking-wider text-lg">
              Statewide Tasmanian Coverage
            </span>
          </div>
        </div>
      </section>

      {/* Trusted Partners Marquee */}
      <section className="py-12 bg-white dark:bg-background overflow-hidden relative border-y border-border/50">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
            display: flex;
            width: max-content;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-8">
          <h2 className="text-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Trusted by Industry Leading Partners
          </h2>
        </div>
        <div className="relative w-full overflow-hidden flex">
          <div className="animate-marquee hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex shrink-0 gap-16 md:gap-32 pr-16 md:pr-32 items-center"
              >
                {[
                  "Ampac Technologies",
                  "Reliable",
                  "Nubco",
                  "Flexistrut",
                  "Reece",
                ].map((brand, j) => (
                  <span
                    key={j}
                    className="font-black uppercase tracking-widest text-2xl md:text-4xl text-foreground opacity-80 hover:opacity-100 hover:text-[#F46707] transition-all duration-300 cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview: What We Do */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#F46707]" />
                <h2 className="text-xl font-bold uppercase tracking-widest text-[#F46707]">
                  What We Do
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-foreground">
                End-to-End Fire Solutions
              </h3>
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-3 bg-[#1A0F66] text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest hover:bg-[#2d1f92] transition-colors shrink-0"
            >
              Explore All Services
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Block 1 */}
            <div className="bg-background border border-border p-10 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
              <div className="w-16 h-16 bg-[#1A0F66]/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#1A0F66]/10 transition-colors">
                <PenTool
                  size={32}
                  className="text-[#1A0F66] dark:text-[#F46707]"
                />
              </div>
              <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                Design & Fabrication
              </h4>
              <p className="text-foreground/70 leading-relaxed font-light mb-8 flex-grow">
                Operating from our purpose-built Mornington facility with custom
                plasma cutting and fabrication capabilities. We specialize in
                custom Alternative Design Solutions compliant with all NCC & BCA
                regulations.
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-background border border-border p-10 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
              <div className="w-16 h-16 bg-[#F46707]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#F46707]/20 transition-colors">
                <Hammer size={32} className="text-[#F46707]" />
              </div>
              <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                Installation
              </h4>
              <p className="text-foreground/70 leading-relaxed font-light mb-8 flex-grow">
                Expert deployment of sprinklers, gas suppression, early-warning
                detection grids, and passive fire measures across highly
                sensitive and critical infrastructure environments.
              </p>
            </div>

            {/* Block 3 */}
            <div className="bg-background border border-border p-10 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
              <div className="w-16 h-16 bg-[#1A0F66]/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#1A0F66]/10 transition-colors">
                <Wrench
                  size={32}
                  className="text-[#1A0F66] dark:text-[#F46707]"
                />
              </div>
              <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                Maintenance & Servicing
              </h4>
              <p className="text-foreground/70 leading-relaxed font-light mb-8 flex-grow">
                Supported by our Mornington HQ and Launceston satellite branch,
                ensuring rapid 24/7 statewide response and compliance with
                Tasmanian Building Act Form 46 & 56 requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restored Original Components */}
      <Services />

      {/* Certifications & Partnerships Banner */}
      {/* <section className="py-12 overflow-hidden relative border-y border-white/10 bg-[#1A0F66]">
        <h3 className="text-center text-sm font-bold uppercase tracking-widest text-white/60 mb-8">
          Industry Certifications & Accreditations
        </h3>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-cert-marquee {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }
          .animate-cert-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="relative w-full overflow-hidden flex">
          <div className="animate-cert-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center">
                {[
                  {
                    src: "/fpaa.png",
                    alt: "FPA Australia Corporate Gold Member",
                  },
                  { src: "/fpa.png", alt: "FPAS Accredited & EAHL Qualified" },
                  {
                    src: "/nifia.png",
                    alt: "National Fire Industry Association (NFIA)",
                  },
                  { src: "/mpt.png", alt: "Master Plumbers Tasmania" },
                  { src: "/tfs.png", alt: "Tasmanian Fire Service Permit 003" },
                ].map((cert, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-center w-[200px] md:w-[250px] mx-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={300}
                      height={120}
                      className="max-h-[50px] md:max-h-[60px] w-full object-contain mx-auto"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Projects />
    </div>
  );
}
