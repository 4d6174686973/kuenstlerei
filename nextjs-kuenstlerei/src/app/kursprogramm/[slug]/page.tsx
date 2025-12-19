import { client } from "@/lib/sanity.client";
import { KURS_DETAIL_QUERY } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function KursDetailPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    const kurs = await client.fetch(KURS_DETAIL_QUERY, { slug });

    if (!kurs) {
      notFound();
    }

    // Datums-Formatierung für die Anzeige unter dem Titel
    const hasSessions = kurs.sessions && kurs.sessions.length > 0;
    const start = hasSessions ? new Date(kurs.firstDate).toLocaleDateString("de-DE") : "";
    const end = hasSessions ? new Date(kurs.lastDate).toLocaleDateString("de-DE") : "";
    const dateRange = kurs.firstDate === kurs.lastDate ? start : `${start} – ${end}`;

    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Titel Sektion */}
        <h1 className="text-4xl font-bold mb-4">{kurs.name}</h1>
        
        {/* Dynamische Datumsanzeige (analog zur Card) */}
        <p className="text-gray-500 mb-6 text-lg">
          {hasSessions ? dateRange : "Termine folgen bald"}
        </p>

        {/* Badge-Leiste - Gleiche Farben wie in den CardItems */}
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
          <h2 className="text-2xl font-bold mb-8 tracking-wide">Termine</h2>
          <div className="space-y-0">
            {kurs.sessions?.map((session: any, i: number) => (
              <div 
                key={i} 
                className="py-6 border-b border-gray-100 last:border-0 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
              >
                <div>
                  <p className="font-bold text-lg">
                    {new Date(session.datum).toLocaleDateString("de-DE", {
                      weekday: 'long',
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-600 italic">
                    {session.startUhrzeit} – {session.endUhrzeit} Uhr
                  </p>
                </div>
                
                {session.kuenstlerin && (
                  <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 self-start md:self-center">
                    Leitung: <span className="font-medium text-gray-700">{session.kuenstlerin}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Optionaler Back-Link */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <a href="/kursprogramm" className="text-gray-500 hover:text-black transition-colors underline underline-offset-4">
            ← Zurück zum Kursprogramm
          </a>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching kurs:", error);
    notFound();
  }
}