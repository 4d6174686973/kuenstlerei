import { client } from "@/lib/sanity.client";
import { PROJEKT_DETAIL_QUERY } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjektDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projekt = await client.fetch(PROJEKT_DETAIL_QUERY, { slug });

  if (!projekt) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
      {/* 1. Titel & Untertitel */}
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4">{projekt.name}</h1>
        <p className="text-2xl text-gray-500 font-light">{projekt.untertitel}</p>
      </header>

      {/* 2. Beschreibung */}
      <article className="prose prose-lg max-w-none mb-20 text-gray-800 leading-relaxed">
        {projekt.beschreibung}
      </article>

      {/* 3. Projektpartner (Karten-Liste) */}
      {projekt.projektpartner && projekt.projektpartner.length > 0 && (
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-gray-400">Partner</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {projekt.projektpartner.map((partner: any, i: number) => (
              <a
                key={i}
                href={partner.partnerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-100 bg-white hover:shadow-md transition group"
              >
                <div className="w-16 h-16 flex-shrink-0 bg-gray-50 flex items-center justify-center p-2">
                  {partner.logoUrl ? (
                    <img src={partner.logoUrl} alt={partner.partnerName} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition" />
                  ) : (
                    <div className="text-xs text-gray-300">Logo</div>
                  )}
                </div>
                <div className="ml-6">
                  <p className="font-bold text-gray-900 group-hover:text-blue-600 transition">{partner.partnerName}</p>
                  <p className="text-sm text-gray-400">Website besuchen ↗</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* 4. Verknüpfte Neuigkeiten */}
      {projekt.verknuepfteNews && projekt.verknuepfteNews.length > 0 && (
        <section className="pt-16 border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-8">Neues zum Projekt</h2>
          <div className="space-y-6">
            {projekt.verknuepfteNews.map((news: any) => (
              <Link
                key={news._id}
                href={`/neu/${news.slug}`}
                className="block p-6 bg-slate-50 hover:bg-slate-100 transition border-l-4 border-slate-200"
              >
                <h3 className="text-xl font-bold">{news.titel}</h3>
                <p className="text-sm text-gray-400 my-2">
                  Veröffentlicht am {new Date(news.publishDate).toLocaleDateString("de-DE")}
                </p>
                <div className="flex gap-2">
                  {news.kategorien?.map((kat: string) => (
                    <Badge key={kat} className="rounded-none bg-white text-slate-500 border-none text-[10px] uppercase">
                      {kat}
                    </Badge>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}