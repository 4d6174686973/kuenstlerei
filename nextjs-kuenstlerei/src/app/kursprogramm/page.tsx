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
    <main className="max-w-6xl">
      <h1 className="text-4xl font-bold mb-12">Kursprogramm</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {kurse.map((kurs: any) => (
          <Link
            key={kurs._id}
            href={`/kursprogramm/${kurs.slug}`}
            className="hover:opacity-80 transition"
          >
            <CardItem
              title={kurs.name}
              date={new Date(kurs.startDatum).toLocaleDateString("de-DE")}
              imageUrl={kurs.image}
              badges={[
                { 
                  text: `${kurs.altersempfehlung}`, 
                  className: "bg-slate-100 text-slate-600 hover:bg-slate-100" // Neutral Gray/Slate
                },
                { 
                  text: `${kurs.preis} €`, 
                  className: "bg-stone-200 text-stone-700 hover:bg-stone-200" // Neutral Stone/Sand
                }
              ]}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}