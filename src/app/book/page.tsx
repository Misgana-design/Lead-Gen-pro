// src/app/book/page.tsx
import { Section } from "@/components/ui/Section";

export default function BookingPage() {
  return (
    <main>
      <div className="animate-fade-in">
        <Section className="bg-slate-50 border-b border-slate-100">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-slate-900">
              Schedule Your Audit
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Select a time that works for you. These 15-minute sessions fill up
              fast.
            </p>
          </div>
        </Section>

        <Section>
          {/* Placeholder for Calendly Embed */}
          <div
            className="w-full min-h-[600px] border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            style={{ position: "relative" }}
          >
            {/* Replace 'YOUR_CALENDLY_LINK' with a real one later */}
            <iframe
              src="https://calendly.com/YOUR_CALENDLY_LINK?hide_event_type_details=1&hide_gdpr_banner=1"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </Section>
      </div>
    </main>
  );
}