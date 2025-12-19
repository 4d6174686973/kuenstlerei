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
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-12">Kursprogramm</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {kurse.map((kurs: any) => (
          <Link
            key={kurs._id}
            href={`/kursprogramm/${kurs.slug}`}
            className="hover:shadow-lg transition rounded-2xl"
          >
            <CardItem
              title={kurs.name}
              date={new Date(kurs.startDatum).toLocaleDateString("de-DE")}
              imageUrl={kurs.image} // optional image field
              badges={[`${kurs.altersempfehlung} Jahre`, `${kurs.preis} €`]}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
