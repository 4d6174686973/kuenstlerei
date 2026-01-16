import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { KURSE_LIST_QUERY } from "@/lib/sanity.queries";
import CardItem from "@/components/CardItem";

export const dynamic = "force-dynamic";

export const metadata = {
  title: 'Kursprogramm | Künstlerei',
};

export default async function KursprogrammPage() {
  const kurse = await client.fetch(KURSE_LIST_QUERY);

  return (
    <main className="max-w-6xl mx-auto py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-12">Kursprogramm</h1>

      <div className="grid lg:grid-cols-2 gap-10">
        {kurse.map((kurs: any) => {
          // Datums-Formatierung
          const start = new Date(kurs.firstDate).toLocaleDateString("de-DE");
          const end = new Date(kurs.lastDate).toLocaleDateString("de-DE");
          const dateString = kurs.firstDate === kurs.lastDate ? start : `${start} – ${end}`;

          // Basis-Badges (Alter und Preis)
          const dynamicBadges = [
            { 
              text: `${kurs.altersempfehlung}`, 
              className: "bg-slate-100 text-slate-600 hover:bg-slate-100" 
            },
            { 
              text: `${kurs.preis} €`, 
              className: "bg-stone-200 text-stone-700 hover:bg-stone-200" 
            }
          ];

          // 1. Wochentag hinzufügen (falls vorhanden)
          if (kurs.wochentag) {
            dynamicBadges.push({
              text: kurs.wochentag,
              className: "bg-blue-50 text-blue-700 hover:bg-blue-50"
            });
          }

          // 2. "Beendet" Badge hinzufügen (falls Kurs in der Vergangenheit)
          if (kurs.isFinished) {
            dynamicBadges.push({
              text: "Beendet",
              className: "bg-red-50 text-red-700 border border-red-100 hover:bg-red-50"
            });
          }

          return (
            <Link
              key={kurs._id}
              href={`/kursprogramm/${kurs.slug}`}
              className="hover:opacity-80 transition block"
            >
              <CardItem
                title={kurs.name}
                subtitle={dateString}
                imageUrl={kurs.image}
                badges={dynamicBadges}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}