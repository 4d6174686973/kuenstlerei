"use client"; // Wichtig: Damit useRouter funktioniert

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">

      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Seite nicht gefunden
        </h1>

        <p className="text-lg text-slate-500 max-w-md mx-auto leading-relaxed">
          Die gesuchte Seite existiert nicht oder wurde verschoben. Bitte überprüfe die URL oder nutze die Navigation, um zurück zur Startseite zu gelangen.
        </p>
        
        {/* Zurück-Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button 
            variant="outline" 
            className="rounded-none px-8 h-12 border-slate-200 uppercase tracking-widest text-xs"
            onClick={() => router.back()} // Nutzt die Browser-Historie
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur letzten Seite
          </Button>

          <Button 
            className="rounded-none px-8 h-12 bg-black text-white hover:bg-slate-800 uppercase tracking-widest text-xs"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Zur Startseite
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}