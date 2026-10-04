import { ShieldCheck, FileBadge, Award } from 'lucide-react';

export default function ComplianceAuthority() {
  return (
    <section className="bg-surface border-y border-border py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <ShieldCheck className="text-[#F46707] mb-6" size={40} strokeWidth={1.5} />
            <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4">Tasmanian Fire Service Permit 003</h3>
            <p className="text-foreground/70 leading-relaxed">
              Fully authorized and permitted by the TFS to install, certify, and maintain critical fire infrastructure across the state.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <FileBadge className="text-[#F46707] mb-6" size={40} strokeWidth={1.5} />
            <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4">Design & Maintenance Standards</h3>
            <p className="text-foreground/70 leading-relaxed">
              In-house Building Act Accredited Practitioners designing to AS 1670 and NCC standards, with routine service strictly adhering to AS 1851-2012. Fully EAHL-qualified for gaseous suppression.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Award className="text-[#F46707] mb-6" size={40} strokeWidth={1.5} />
            <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4">FPAA Gold Corporate Member</h3>
            <p className="text-foreground/70 leading-relaxed">
              Committed to the Fire Protection Association Australia Codes of Practice, ensuring the highest standards of safety, ethics, and technical excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
