import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-8">
        <Link href="/" className="font-semibold text-lg">
          Logo
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/kursprogramm">Kursprogramm</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}
