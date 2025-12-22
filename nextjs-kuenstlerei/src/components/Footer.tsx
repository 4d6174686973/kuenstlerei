import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Haupt-Bereich: Grid-Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:mx-12 gap-12 mb-16">
          
          {/* 1. Spalte: Branding & Mission */}
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl tracking-tighter uppercase">
              Künstlerei
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Kunstakademie Würselen e.V. – Ein Ort für Kreativität, Bildung und Gemeinschaft in Würselen.
            </p>
          </div>

          {/* 2. Spalte: Schnelle Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Navigation</h3>
            <nav className="flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/kursprogramm" className="hover:text-white transition-colors">Kursprogramm</Link>
              <Link href="/projekte" className="hover:text-white transition-colors">Projekte</Link>
              <Link href="/neu" className="hover:text-white transition-colors">Neuigkeiten</Link>
              <Link href="/ueber-uns" className="hover:text-white transition-colors">Über Uns</Link>
              <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
            </nav>
          </div>

          {/* 3. Spalte: Kontakt-Quickinfo */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Kontakt</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gray-500" />
                <span>Kaiserstraße 29, 52146 Würselen</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-500" />
                <a href="mailto:kunstakademie@online.de" className="hover:text-white transition-colors">
                  kunstakademie@online.de
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Unterer Bereich: Rechtliches & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest text-gray-500 font-medium">
          <div className="flex flex-wrap justify-center gap-6">
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