import { ShieldCheck, FileBadge, Award } from 'lucide-react';

export default function ComplianceAuthority() {
  return (
    <section className="bg-surface border-y border-border py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed">
            Parmic has delivered critical fire protection infrastructure across both of Tasmania's major hospital redevelopments: <strong>The Royal Hobart Hospital</strong> and <strong>Launceston General Hospital</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <ShieldCheck className="text-[#F46707] mb-6" size={40} strokeWidth={1.5} />
            <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4">Tasmanian Fire Service Permit 003</h3>
            <p className="text-foreground/70 leading-relaxed">
              Fully authorized and permitted by the TFS to install, certify, and maintain critical fire infrastructure across the state.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <FileBadge className="text-[#F46707] mb-6" size={40} strokeWidth={1.5} />
            <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4">Design & EAHL Accreditation</h3>
            <p className="text-foreground/70 leading-relaxed">
              In-house Building Act Accredited Practitioners designing to AS1670 and NCC standards, plus fully EAHL-qualified staff for ozone-depleting gaseous suppression.
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
