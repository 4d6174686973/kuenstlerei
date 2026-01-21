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

  const wochentagOrder: Record<string, number> = {
    "Montag": 1,
    "Dienstag": 2,
    "Mittwoch": 3,
    "Donnerstag": 4,
    "Freitag": 5,
    "Samstag": 6,
    "Sonntag": 7
  };

  const sortedKurse = [...kurse].sort((a, b) => {
    const orderA = wochentagOrder[a.wochentag] || 99;
    const orderB = wochentagOrder[b.wochentag] || 99;
    
    return orderA - orderB;
  });

  return (
    <main className="max-w-6xl mx-auto py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-12">Kursprogramm</h1>

      <div className="grid lg:grid-cols-2 gap-10">
        {sortedKurse.map((kurs: any) => {
          // Datums-Formatierung
          const start = new Date(kurs.firstDate).toLocaleDateString("de-DE");
          const end = new Date(kurs.lastDate).toLocaleDateString("de-DE");
          const dateString = kurs.firstDate === kurs.lastDate ? start : `${start} – ${end}`;
          const subtitle = (
            <div className="text-slate-700">
              {kurs.kursleitung && (
                <>
                  <span>{kurs.kursleitung}</span>
                  <br />
                </>
              )}
              <span>{dateString}</span>
            </div>
          );

          const dynamicBadges = [];

          // Alter hinzufügen
          if (kurs.altersempfehlung) {
            dynamicBadges.push({
              text: `${kurs.altersempfehlung}`,
              className: "bg-slate-100 text-slate-600 hover:bg-slate-100"
            });
          }

          // Preis hinzufügen
          if (kurs.preis) {
            dynamicBadges.push({
              text: `${kurs.preis} €`,
              className: "bg-stone-200 text-stone-700 hover:bg-stone-200"
            });
          }

          // Wochentag hinzufügen
          if (kurs.wochentag) {
            dynamicBadges.push({
              text: kurs.wochentag,
              className: "bg-blue-50 text-blue-700 hover:bg-blue-50"
            });
          }

          // Tageszeit hinzufügen
          if (kurs.tageszeit) {
            dynamicBadges.push({
              text: kurs.tageszeit,
              className: "bg-indigo-50 text-indigo-700 hover:bg-indigo-50" 
            });
          }

          // "Beendet" Badge hinzufügen
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
                subtitle={subtitle}
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