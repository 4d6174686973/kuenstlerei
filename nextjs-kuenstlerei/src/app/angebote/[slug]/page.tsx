import { client } from "@/lib/sanity.client";
import { ANGEBOT_DETAIL_QUERY } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function AngebotDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const angebot = await client.fetch(ANGEBOT_DETAIL_QUERY, { slug });

  if (!angebot) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
      <Link href="/angebote" className="flex items-center text-sm text-gray-500 hover:text-black mb-8 group">
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Zurück zu allen Angeboten
      </Link>

      <header className="mb-12">
        <span className="text-orange-600 uppercase tracking-widest text-sm font-bold">
          {angebot.kategorie}
        </span>
        <h1 className="text-5xl font-bold mt-2">{angebot.titel}</h1>
      </header>

      {/* Vollständige Beschreibung */}
      <article className="prose prose-lg max-w-none mb-20 text-gray-800">
        <p className="whitespace-pre-wrap">{angebot.beschreibung}</p>
      </article>

      {/* Fotogalerie */}
      {angebot.galerie && angebot.galerie.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-8">Impressionen</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {angebot.galerie.map((imgUrl: string, i: number) => (
              <div key={i} className="aspect-square overflow-hidden bg-gray-100 rounded-md">
                <img src={imgUrl} alt="Galeriebild" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}