// src/app/contact/page.tsx
import ContactForm from "@/components/forms/ContactForm";
import { Section } from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      <main>
        <Section className="bg-slate-50 border-b border-slate-100">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-slate-900">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Have a specific question? Send us a message and our team will get
              back to you within 24 hours.
            </p>
          </div>
        </Section>

        {/* This renders the form we built in the previous step */}
        <ContactForm />
      </main>
    </div>
  );
}
