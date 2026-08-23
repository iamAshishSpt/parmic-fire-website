export default function CompanyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-12">Company Profile</h1>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-semibold text-[#F46707] mb-6">Who We Are</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">We are Tasmania's premier fire protection engineers, dedicated to securing critical infrastructure, commercial developments, and high-value assets across the state.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#F46707] mb-6">Quality Assurance</h2>
            <div className="bg-[#1A0F66] text-white p-8 rounded-md">
              <p className="text-lg leading-relaxed mb-4">We operate strictly under the highest industry standards.</p>
              <p className="text-xl font-bold uppercase tracking-wider text-[#F46707]">AS/NZS ISO 9001 Compliant</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#F46707] mb-6">Our Workshop</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">Our Mornington fabrication workshop is fully equipped to handle custom piping, specialized suppression unit assembly, and rapid response deployment preparations.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#F46707] mb-6">Service Commitment</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">From initial schematic design through fabrication, installation, and long-term servicing, our commitment is to flawless execution and 24/7 reliability.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
