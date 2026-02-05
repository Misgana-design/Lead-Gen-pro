import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} LeadGen Pro Consulting. All rights
            reserved.
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link href="/admin" className="hover:text-slate-400">
            Owner Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;