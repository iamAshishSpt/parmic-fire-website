import {
  Flame,
  CheckCircle2,
  ShieldAlert,
  Award,
  Droplets,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      id="about"
      className="bg-[#1A0F66] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-[#2d1f92]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 mb-20">
        {/* Left Side: Accreditations & Logos */}
        <div className="md:w-1/2 flex flex-col gap-8">
          <div className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm inline-flex items-center justify-center self-start mb-6">
            <Image
              src="/parmic-logo.webp"
              alt="Parmic Fire Protection"
              width={240}
              height={70}
              className="h-12 md:h-14 w-auto object-contain block"
              priority
            />
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-white/50">
              Industry Memberships
            </h4>

            {/* Actual Logos Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-6 items-center justify-items-center">
              <Image 
                src="/fpaa.png" 
                alt="FPA Australia Corporate Gold Member" 
                width={200} height={80} 
                className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" 
              />
              <Image 
                src="/nifia.png" 
                alt="National Fire Industry Association (NFIA)" 
                width={200} height={80} 
                className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" 
              />
              <Image 
                src="/mpt.png" 
                alt="Master Plumbers Tasmania" 
                width={200} height={80} 
                className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" 
              />
              <Image 
                src="/fpa.png" 
                alt="FPAS Accredited & EAHL Qualified" 
                width={200} height={80} 
                className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" 
              />
              <div className="col-span-2 flex justify-center w-full">
                <Image 
                  src="/tfs.png" 
                  alt="Tasmanian Fire Service Permit 003" 
                  width={200} height={80} 
                  className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact & Partners */}
        <div className="md:w-1/2 flex flex-col gap-10">
          <div className="bg-white/5 p-8 rounded-sm border border-white/10">
            <h4 className="font-black uppercase tracking-widest text-sm mb-2 text-[#F46707]">
              24/7 Emergency Call Out
            </h4>
            <a
              href="tel:+61362450776"
              className="text-white font-bold text-4xl tracking-tight hover:text-[#F46707] transition-colors"
            >
              (03) 6245 0776
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-2">
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#F46707]">
                Contact Details
              </h4>
              <ul className="space-y-5 text-white/90 font-light text-sm">
                <li>
                  <strong className="block text-white font-semibold mb-1">
                    Mornington HQ & Workshop
                  </strong>
                  8 Jannah Court, Mornington TAS 7018
                  <br />
                  <span className="opacity-80">PO Box 608, Rosny Park TAS 7018</span>
                </li>
                <li>
                  <strong className="block text-white font-semibold mb-1">
                    Devonport Warehouse
                  </strong>
                  246 Kelcey Tier Rd, Spreyton TAS 7310
                </li>
                <li>
                  <strong className="block text-white font-semibold mb-1">
                    General Enquiries
                  </strong>
                  <a
                    href="mailto:parmic@parmic.com.au"
                    className="hover:text-[#F46707] transition-colors block"
                  >
                    parmic@parmic.com.au
                  </a>
                  <a
                    href="tel:+61362450776"
                    className="hover:text-[#F46707] transition-colors block mt-1"
                  >
                    (03) 6245 0776
                  </a>
                  <span className="block mt-1 text-white/70">
                    Fax: (03) 6245 0778
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#F46707]">
                Trusted Partners
              </h4>
              <ul className="space-y-3 text-white/90 font-light text-sm flex flex-col">
                <li>Ampac Technologies</li>
                <li>Reliable</li>
                <li>Nubco</li>
                <li>Flexistrut</li>
                <li>Reece</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/50 text-xs font-light">
        <p>
          &copy; {new Date().getFullYear()} Parmic Fire Protection. All Rights
          Reserved.
        </p>
        <p className="mt-4 md:mt-0 flex items-center gap-2">
          AS/NZS ISO 9001 Quality Management System{" "}
          <Award size={14} className="text-accent" />
        </p>
      </div>
    </footer>
  );
}
