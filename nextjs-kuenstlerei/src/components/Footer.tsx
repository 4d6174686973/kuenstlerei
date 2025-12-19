import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="font-semibold">Logo</span>
            <nav className="flex gap-4">
              <Link href="/imprint">Imprint</Link>
              <Link href="/privacy">Privacy</Link>
            </nav>
          </div>

          <span className="opacity-70">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
