import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="font-semibold">Logo</span>
            <nav className="flex gap-4">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
              <Link href="/agb">AGB</Link>
            </nav>
          </div>

          <span className="opacity-70">© {new Date().getFullYear()} Kunstakademie Würselen e.V.</span>
        </div>
      </div>
    </footer>
  );
}
