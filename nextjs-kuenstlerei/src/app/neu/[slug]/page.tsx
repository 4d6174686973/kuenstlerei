import { client } from "@/lib/sanity.client";
import { NEU_DETAIL_QUERY } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function NeuigkeitDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const news = await client.fetch(NEU_DETAIL_QUERY, { slug });

  if (!news) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      {/* 1. Zurück zu allen */}
      <Link href="/neu" className="flex items-center text-sm text-gray-500 hover:text-black transition mb-8 group">
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Zurück zur Übersicht
      </Link>

      <article>
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <p className="text-sm text-gray-400">
              Gepostet am {new Date(news.publishDate).toLocaleDateString("de-DE")}
            </p>
            
            {/* Eventdatum Highlight */}
            {news.eventDate && (
              <div className="flex items-center bg-amber-50 text-amber-700 px-4 py-2 border border-amber-100 self-start md:self-auto">
                <Calendar className="mr-2 h-4 w-4" />
                <span className="font-bold">Event am: {new Date(news.eventDate).toLocaleDateString("de-DE")}</span>
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{news.titel}</h1>
          
          <div className="flex flex-wrap gap-2">
            {news.kategorien?.map((kat: string) => (
              <Badge key={kat} className="rounded-none bg-slate-100 text-slate-600 border-none">
                {kat}
              </Badge>
            ))}
          </div>
        </header>

        {/* Beschreibung & Referenz */}
        <section className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-16">
          <div className="whitespace-pre-wrap">{news.beschreibung}</div>
        </section>

        {/* Galerie */}
        {news.galerie && news.galerie.length > 0 && (
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {news.galerie.map((imgUrl: string, index: number) => (
                <div key={index} className={`overflow-hidden bg-gray-50 ${index === 0 && news.galerie.length % 2 !== 0 ? "md:col-span-2" : ""}`}>
                  <img src={imgUrl} alt="Galerie" className="w-full h-full object-cover max-h-[600px]" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Referenz-Box (Link zu Kurs/Projekt) */}
        {news.referenz && (
          <section className="p-8 border border-gray-100 bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Mehr erfahren über</p>
              <h3 className="text-xl font-bold">{news.referenz.name}</h3>
            </div>
            <Link 
              href={`/${news.referenz._type === "kursprogramm" ? "kursprogramm" : "projekte"}/${news.referenz.slug}`}
              className="flex items-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition text-sm uppercase tracking-widest"
            >
              Zum {news.referenz._type === "kursprogramm" ? "Kurs" : "Projekt"}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </section>
        )}
      </article>
    </main>
  );
}