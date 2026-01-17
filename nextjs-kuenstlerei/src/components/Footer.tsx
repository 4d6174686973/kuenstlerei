import Link from "next/link";
import Image from "next/image";
import { Instagram,Mail, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Haupt-Bereich: Grid-Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* 1. Spalte: Branding & Mission */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image 
                src="/logo_invers.png"
                alt="Kunstakademie Würselen Logo"
                width={140}
                height={60}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Kunstakademie Würselen e.V. – Ein Ort für Kreativität, Bildung und Gemeinschaft in der Region.
            </p>
          </div>

          {/* 2. Spalte: Schnelle Links (Jetzt automatisch aus Konstanten & 2 Spalten) */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">
              Navigation
            </h3>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-300">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. Spalte: Kontakt-Quickinfo */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">
              Kontakt
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gray-500 shrink-0" />
                <span>Kaiserstraße 29,<br />52146 Würselen</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-500 shrink-0" />
                <a href="mailto:kuenstlerei@online.de" className="hover:text-white transition-colors">
                  kuenstlerei@online.de
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-gray-500 shrink-0" />
                <a href="https://www.instagram.com/kuenstlerei_wuerselen/" className="hover:text-white transition-colors">
                  kuenstlerei_wuerselen
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Unterer Bereich: Rechtliches & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest text-gray-500 font-medium">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
          </div>
          
          <p className="text-center md:text-right">
            © {currentYear} Kunstakademie Würselen e.V.
          </p>
        </div>
      </div>
    </footer>
  );
}