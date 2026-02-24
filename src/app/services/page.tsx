import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Target, TrendingUp, ShieldCheck } from "lucide-react";

// PORTFOLIO NOTE: This data could eventually come from a CMS.
// We use SSG (Static Site Generation) because service descriptions
// change rarely, resulting in near-instant load times.
const SERVICES = [
  {
    title: "Operational Audit",
    price: "Starting at $499",
    description:
      "A deep dive into your current business processes to identify bottlenecks and wasted spend.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Lead Gen Systems",
    price: "Starting at $1,200",
    description:
      "Custom-built automated funnels that turn cold traffic into booked appointments while you sleep.",
    icon: <Target className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Revenue Scaling",
    price: "Custom Quote",
    description:
      "Long-term partnership focused on aggressive market expansion and high-ticket sales training.",
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
  },
];

// ISR (Incremental Static Regeneration) implementation:
// We tell Next.js to re-check for data updates every 1 hour (3600 seconds)
export const revalidate = 3600;

export default function ServicesPage() {
  return (
    <div className="animate-fade-in">
      <main>
        <Section className="bg-slate-50">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Premium consulting solutions designed to help local businesses
              dominate their market.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="flex flex-col p-8 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 transition-colors shadow-sm"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {service.price}
                </p>
                <p className="text-slate-600 mb-8 flex-grow">
                  {service.description}
                </p>
                <Link href="/book">
                  <Button variant="secondary" className="w-full">
                    Select Plan
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
