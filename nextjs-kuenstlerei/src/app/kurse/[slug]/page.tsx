// app/kurse/[slug]/page.tsx
import { client } from "@/lib/sanity.client";
import { KURS_DETAIL_QUERY } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";

// Force dynamic SSR (no rebuilds, instant slugs)
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
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold mb-4">{kurs.name}</h1>

        <div className="text-gray-600 mb-8 space-y-1">
          <p>Alter: {kurs.altersempfehlung}</p>
          <p>
            Start: {new Date(kurs.startDatum).toLocaleDateString("de-DE")}
          </p>
          <p className="font-semibold">{kurs.preis} €</p>
        </div>

        <p className="mb-12 leading-relaxed">{kurs.beschreibung}</p>

        <section className="mb-16">
          <h2 className="text-2xl mb-6">Sessions</h2>
          <div className="space-y-4">
            {kurs.sessions?.map((session: any, i: number) => (
              <div key={i} className="border rounded-xl p-4">
                <p>
                  {new Date(session.datum).toLocaleDateString("de-DE")} –{" "}
                  {session.startUhrzeit} bis {session.endUhrzeit}
                </p>
                <p className="text-sm text-gray-600">
                  Künstlerin: {session.kuenstlerin}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl mb-6">Kontakt</h2>
          <div className="border rounded-xl p-6 space-y-2">
            <p>Telefon: {kurs.kontakt?.handynummer}</p>
            <p>Email: {kurs.kontakt?.email}</p>
            <p>
              Adresse: {kurs.kontakt?.adresse?.strasse},{" "}
              {kurs.kontakt?.adresse?.plz}{" "}
              {kurs.kontakt?.adresse?.stadt}
            </p>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error fetching kurs:", error);
    notFound();
  }
}
