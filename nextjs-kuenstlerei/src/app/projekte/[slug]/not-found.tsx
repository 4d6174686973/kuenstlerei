// app/projekte/[slug]/not-found.tsx
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Projekt nicht gefunden</h1>
      <p className="text-gray-600 mb-8">
        Das angeforderte Projekt existiert nicht oder wurde entfernt.
      </p>

      {/* justify-center zentriert den Inhalt (den Button) innerhalb des Links */}
      <Link href="/projekte" className="flex justify-center w-full">
        <Button 
          variant="default" 
          className="rounded-none px-6 h-12 border-slate-200 uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zu allen Projekten
        </Button>
      </Link>
    </main>
  );
}