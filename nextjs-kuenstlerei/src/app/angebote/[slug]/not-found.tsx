// app/angebote/[slug]/not-found.tsx
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center min-h-[60vh] justify-center">
      <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Angebot nicht gefunden</h1>
      <p className="text-gray-500 mb-10 max-w-md">
        Das gesuchte Angebot existiert leider nicht oder der Link hat sich geändert.
      </p>

      <Link href="/angebote">
        <Button 
          variant="outline" 
          className="rounded-none px-8 h-12 border-black hover:bg-black hover:text-white transition-colors uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Übersicht
        </Button>
      </Link>
    </main>
  );
}