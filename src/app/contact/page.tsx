"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Printer,
  MapPin,
  Building,
  ShieldAlert,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column: Contact Information */}
            <div className="flex flex-col justify-start">
              <div className="flex items-center gap-4 mb-8">
                <ShieldAlert className="text-[#F46707]" size={40} />
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
                  Get in Touch /<br className="hidden md:block" /> 24/7 Support
                </h1>
              </div>

              <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                Our team is ready to assist you with new projects, scheduled
                maintenance, or emergency support across Tasmania. Reach out to
                our statewide offices below.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-[#F46707]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-foreground/50">
                      General Enquiries
                    </p>
                    <a
                      href="mailto:parmic@parmic.com.au"
                      className="text-lg font-medium text-foreground hover:text-[#F46707] transition-colors"
                    >
                      parmic@parmic.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-[#F46707]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-foreground/50">
                      Phone (Mornington HQ)
                    </p>
                    <a
                      href="tel:+61362450776"
                      className="text-lg font-medium text-foreground hover:text-[#F46707] transition-colors"
                    >
                      +61 3 6245 0776
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center shrink-0">
                    <Printer className="text-[#F46707]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-foreground/50">
                      Fax
                    </p>
                    <span className="text-lg font-medium text-foreground">
                      +61 3 6245 0778
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-6">
                Our Locations
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Mornington HQ Card */}
                <div className="bg-surface border border-border p-6 rounded-xl hover:border-[#F46707]/30 transition-colors">
                  <Building
                    className="text-[#F46707] mb-4"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <h4 className="text-lg font-bold uppercase tracking-tight text-foreground mb-4">
                    Mornington HQ
                  </h4>
                  <div className="space-y-4 text-foreground/80">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="text-[#F46707] shrink-0 mt-1"
                        size={16}
                      />
                      <span className="leading-snug">
                        8 Jannah Court,
                        <br />
                        Mornington, TAS
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail
                        className="text-[#F46707] shrink-0 mt-1"
                        size={16}
                      />
                      <span className="leading-snug">
                        <strong>Postal:</strong> PO Box 608,
                        <br />
                        Rosny Park TAS 7018
                      </span>
                    </div>
                  </div>
                </div>

                {/* Devonport Warehouse Card */}
                <div className="bg-surface border border-border p-6 rounded-xl hover:border-[#F46707]/30 transition-colors">
                  <Building
                    className="text-[#F46707] mb-4"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <h4 className="text-lg font-bold uppercase tracking-tight text-foreground mb-4">
                    Devonport Warehouse
                  </h4>
                  <div className="space-y-4 text-foreground/80">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="text-[#F46707] shrink-0 mt-1"
                        size={16}
                      />
                      <span className="leading-snug">
                        246 Kelcey Tier Rd,
                        <br />
                        Spreyton, TAS 7310
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone
                        className="text-[#F46707] shrink-0 mt-1"
                        size={16}
                      />
                      <a
                        href="tel:+61362450776"
                        className="hover:text-[#F46707] transition-colors leading-snug"
                      >
                        +61 3 6245 0776
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="flex items-start lg:mt-6">
              <div className="w-full bg-surface border border-border p-8 md:p-10 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-2">
                  Send an Enquiry
                </h3>
                <p className="text-foreground/60 mb-8">
                  Fill out the form below and our team will get back to you
                  promptly.
                </p>

                {isSuccess ? (
                  <div className="py-12 text-center border-t border-border mt-6">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Enquiry Sent Successfully</h4>
                    <p className="text-foreground/70">Our service administration team will review your details and contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-bold uppercase tracking-wider text-foreground/70"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[#F46707] focus:ring-1 focus:ring-[#F46707] transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-sm font-bold uppercase tracking-wider text-foreground/70"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[#F46707] focus:ring-1 focus:ring-[#F46707] transition-all"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-bold uppercase tracking-wider text-foreground/70"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[#F46707] focus:ring-1 focus:ring-[#F46707] transition-all"
                          placeholder="0400 000 000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-bold uppercase tracking-wider text-foreground/70"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[#F46707] focus:ring-1 focus:ring-[#F46707] transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="projectType"
                        className="text-sm font-bold uppercase tracking-wider text-foreground/70"
                      >
                        Enquiry Type
                      </label>
                      <div className="relative">
                        <select
                          id="projectType"
                          name="projectType"
                          defaultValue=""
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground appearance-none focus:outline-none focus:border-[#F46707] focus:ring-1 focus:ring-[#F46707] transition-all"
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="design">Design</option>
                          <option value="installation">Installation</option>
                          <option value="servicing">Servicing</option>
                          <option value="general">General Enquiry</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-foreground/50">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-bold uppercase tracking-wider text-foreground/70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[#F46707] focus:ring-1 focus:ring-[#F46707] transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F46707] text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-[#e05e06] transition-colors shadow-lg shadow-[#F46707]/20 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Submit Enquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
