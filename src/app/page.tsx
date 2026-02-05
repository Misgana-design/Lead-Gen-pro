import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { CheckCircle, BarChart3, Zap, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <main>
        {/* 1. HERO SECTION (Refined) */}
        <Section className="bg-slate-50 border-b border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
                Trusted by 50+ Local Businesses
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                Scale Your Profits with{" "}
                <span className="text-blue-600">Smart Strategy</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                We help local service providers stop chasing leads and start
                closing them through automated systems and high-impact
                consulting.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button>Book Free Strategy Call</Button>
                </Link>
                <Link href="/services">
                  <Button variant="secondary">Explore Our Services</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-100 lg:h-125 bg-slate-200 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center text-slate-400 italic">
              {/* Placeholder for real image */}
              [Professional Consultant Image]
            </div>
          </div>
        </Section>

        {/* 2. SERVICES PREVIEW (3-Column Grid) */}
        <Section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              How We Grow Your Business
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our three-step framework designed specifically for local service
              providers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="text-blue-600" />,
                title: "Growth Strategy",
                desc: "Customized roadmaps to scale your operations and revenue.",
              },
              {
                icon: <Zap className="text-blue-600" />,
                title: "Lead Automation",
                desc: "Automated booking systems so you never miss a client again.",
              },
              {
                icon: <Users className="text-blue-600" />,
                title: "Sales Training",
                desc: "Convert 2x more inquiries into high-paying appointments.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 3. TESTIMONIALS (Static Demo Data) */}
        <Section className="bg-slate-900 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                What Our Clients Are Saying
              </h2>
              <p className="mt-4 text-slate-400 text-lg">
                Results don't lie. Join dozens of local owners who have
                reclaimed their time.
              </p>
            </div>
            <div className="space-y-6">
              <blockquote className="p-8 bg-slate-800 rounded-xl border border-slate-700">
                <p className="text-lg italic text-slate-200">
                  "LeadGen Pro doubled our monthly bookings in just 60 days. The
                  automated calendar alone saved me 10 hours a week."
                </p>
                <footer className="mt-4 font-semibold">
                  — Sarah Jenkins, Jenkins Law Firm
                </footer>
              </blockquote>
            </div>
          </div>
        </Section>

        {/* 4. CTA BANNER */}
        <Section className="text-center">
          <div className="bg-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to automate your growth?
            </h2>
            <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
              Book a 15-minute audit today and we'll show you exactly where your
              business is losing money.
            </p>
            <div className="mt-10">
              <Link href="/book">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors">
                  Claim Your Free Audit
                </button>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}