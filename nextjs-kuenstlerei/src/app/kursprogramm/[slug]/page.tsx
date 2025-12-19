// app/kurse/[slug]/page.tsx
import { client } from "@/lib/sanity.client";
import { KURS_DETAIL_QUERY } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";

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

    return (
      <main className="max-w-3xl">

        <h1 className="text-4xl font-bold mb-6">{kurs.name}</h1>
        
        <div className="text-gray-600 mb-8 space-y-1">
          <p>Alter: {kurs.altersempfehlung}</p>
          <p>
            Start: {new Date(kurs.startDatum).toLocaleDateString("de-DE")}
          </p>
          <p className="font-semibold">{kurs.preis} €</p>
        </div>

        <p className="mb-12 leading-relaxed text-lg text-gray-800 border-l-3 border-gray-300 pl-4">
            {kurs.beschreibung}
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Sessions</h2>
          <div className="space-y-4">
            {kurs.sessions?.map((session: any, i: number) => (
              <div key={i} className="pb-4">
                <p className="font-medium">
                  {new Date(session.datum).toLocaleDateString("de-DE")}
                </p>
                <p className="text-gray-600">
                  {session.startUhrzeit} bis {session.endUhrzeit} Uhr
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Leitung: {session.kuenstlerin}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    );
  } catch (error) {
    console.error("Error fetching kurs:", error);
    notFound();
  }
}