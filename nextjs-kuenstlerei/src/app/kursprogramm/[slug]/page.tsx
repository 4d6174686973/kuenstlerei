import { client } from "@/lib/sanity.client";
import { KURS_DETAIL_QUERY } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function KursDetailPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    const kurs = await client.fetch(KURS_DETAIL_QUERY, { slug });

    if (!kurs) notFound();

    const hasSessions = kurs.sessions && kurs.sessions.length > 0;
    const start = hasSessions ? new Date(kurs.firstDate).toLocaleDateString("de-DE") : "";
    const end = hasSessions ? new Date(kurs.lastDate).toLocaleDateString("de-DE") : "";
    const dateRange = kurs.firstDate === kurs.lastDate ? start : `${start} – ${end}`;

    return (
      <main className="max-w-3xl mx-auto px-4 py-12 min-h-screen">
        {/* 1. Zurück-Link GANZ OBEN */}
        <Link 
          href="/kursprogramm" 
          className="flex items-center text-sm text-gray-500 hover:text-black transition mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Zurück zum Kursprogramm
        </Link>

        {/* Titel Sektion */}
        <h1 className="text-4xl font-bold mb-4">{kurs.name}</h1>
        
        <p className="text-gray-500 mb-6 text-lg">
          {hasSessions ? dateRange : "Termine folgen bald"}
        </p>

        {/* Kursleitung */}
        {kurs.kursleitung && (
          <p className="text-gray-700 mb-6 text-lg">
            <span className="font-semibold">Kursleitung:</span> {kurs.kursleitung}
          </p>
        )}

        {/* Badge-Leiste */}
        <div className="flex gap-2 mb-10 flex-wrap">
          <Badge className="rounded-none bg-slate-100 text-slate-600 hover:bg-slate-100 border-none px-3 py-1">
            {kurs.altersempfehlung}
          </Badge>
          <Badge className="rounded-none bg-stone-200 text-stone-700 hover:bg-stone-200 border-none px-3 py-1">
            {kurs.preis} €
          </Badge>
          {kurs.wochentag && (
            <Badge className="rounded-none bg-blue-50 text-blue-700 hover:bg-blue-50 border-none px-3 py-1">
              {kurs.wochentag}
            </Badge>
          )}
          {kurs.isFinished && (
            <Badge className="rounded-none bg-red-50 text-red-700 border border-red-100 hover:bg-red-50 px-3 py-1">
              Kurs beendet
            </Badge>
          )}
        </div>

        {/* Beschreibung */}
        <div className="mb-16">
          <p className="leading-relaxed text-xl text-gray-800 border-l-4 border-gray-200 pl-6 py-1">
            {kurs.beschreibung}
          </p>
        </div>

        {/* Sessions Sektion */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Termine</h2>
          <div className="space-y-0">
            {kurs.sessions?.map((session: any, i: number) => (
              <div 
                key={i} 
                className="py-4 border-b border-gray-100 last:border-0 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
              >
                <div>
                  <p className="font-bold text-lg">
                    {new Date(session.datum).toLocaleDateString("de-DE", {
                      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-600 italic">
                    {session.startUhrzeit} – {session.endUhrzeit} Uhr
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. VERKNÜPFTE NEUIGKEITEN UNTEN */}
        {kurs.verknuepfteNews && kurs.verknuepfteNews.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold mb-8">Neues zu diesem Kurs</h2>
            <div className="space-y-4">
              {kurs.verknuepfteNews.map((news: any) => (
                <Link 
                  key={news._id} 
                  href={`/neu/${news.slug}`}
                  className="block p-6 bg-slate-50 hover:bg-slate-100 transition border-l-4 border-slate-200"
                >
                  <div className="flex gap-2 mb-2">
                    {news.kategorien?.map((kat: string) => (
                      <span key={kat} className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                        {kat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold">{news.titel}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Vom {new Date(news.publishDate).toLocaleDateString("de-DE")}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    );
  } catch (error) {
    console.error("Error fetching kurs:", error);
    notFound();
  }
}