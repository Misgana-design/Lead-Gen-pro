import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-slate-50 py-20 px-6 lg:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Scale Your Business with{" "}
              <span className="text-blue-600">Data-Driven</span> Strategy
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-lg">
              We help local service providers optimize their operations and 2X
              their lead conversion through specialized consulting and modern
              automation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button>Book a Strategy Call</Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary">View Services</Button>
              </Link>
            </div>
          </div>

          {/* Visual Placeholder (Next.js Image would go here) */}
          <div className="bg-slate-200 aspect-video rounded-xl shadow-2xl flex items-center justify-center text-slate-400 font-medium italic">
            [Professional Consultant Image]
          </div>
        </div>
      </section>
    </main>
  );
}
