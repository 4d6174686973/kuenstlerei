import { client } from "@/lib/sanity.client";
import { HOME_LATEST_NEWS_QUERY, HOME_UPCOMING_EVENTS_QUERY } from "@/lib/sanity.queries";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default async function IndexPage() {
  // Daten parallel vom Sanity Client holen
  const [latestNews, upcomingEvents] = await Promise.all([
    client.fetch(HOME_LATEST_NEWS_QUERY),
    client.fetch(HOME_UPCOMING_EVENTS_QUERY),
  ]);

  return (
    <div className="space-y-24 pb-20">
      
      {/* --- HERO SEKTION --- */}
      <section className="py-16 border-b border-gray-100">
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
          Künstlerei<span className="text-slate-300">.</span>
        </h1>
        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl leading-tight mb-8 text-slate-700">
            Akademie für Malerei und Grafik in Würselen. Entdecken Sie Raum für Experimente und handwerkliche Präzision.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/kursprogramm" className="px-8 py-4 bg-black text-white uppercase tracking-widest text-sm font-bold hover:bg-gray-800 transition">
              Zum Kursprogramm
            </Link>
            <Link href="/projekte" className="px-8 py-4 border border-black uppercase tracking-widest text-sm font-bold hover:bg-gray-50 transition">
              Projekte
            </Link>
          </div>
        </div>
      </section>

      {/* --- HIGHLIGHTS: EVENTS (Nur anzeigen, wenn vorhanden) --- */}
      {upcomingEvents.length > 0 && (
        <section>
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold uppercase tracking-tight">Zukünftige Events</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event: any) => (
              <Link 
                key={event._id} 
                href={`/neu/${event.slug}`}
                className="group p-8 bg-slate-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-center text-amber-600 mb-4">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="text-sm font-bold uppercase tracking-widest">
                    {new Date(event.eventDate).toLocaleDateString("de-DE", { day: '2-digit', month: 'long' })}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{event.titel}</h3>
                <p className="text-gray-600 line-clamp-2 mb-6 text-sm leading-relaxed">
                  {event.beschreibung}
                </p>
                <div className="flex items-center text-sm font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                  Details <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* --- LETZTE BEITRÄGE LISTE --- */}
      <section>
        <h2 className="text-3xl font-bold uppercase tracking-tight mb-10">Aktuelles aus der Künstlerei</h2>
        <div className="divide-y divide-gray-100">
          {latestNews.map((post: any) => (
            <Link 
              key={post._id}
              href={`/neu/${post.slug}`} 
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 first:pt-0 hover:bg-slate-50/50 transition-colors px-4 -mx-4"
            >
              <div className="max-w-2xl">
                <div className="flex gap-2 mb-2">
                  {post.kategorien?.map((kat: string) => (
                    <span key={kat} className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                      {kat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                  {post.titel}
                </h3>
              </div>
              <div className="text-sm text-gray-400 mt-4 md:mt-0 font-medium whitespace-nowrap">
                {new Date(post.publishDate).toLocaleDateString("de-DE")}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/neu" className="inline-block border-b-2 border-black pb-2 text-sm font-bold uppercase tracking-[0.3em] hover:text-gray-500 hover:border-gray-300 transition-all">
            Alle Neuigkeiten anzeigen
          </Link>
        </div>
      </section>

    </div>
  );
}