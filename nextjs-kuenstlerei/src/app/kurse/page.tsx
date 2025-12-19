import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { KURSE_LIST_QUERY } from "@/lib/sanity.queries";

export const dynamic = "force-dynamic";

export default async function KursePage() {
  const kurse = await client.fetch(KURSE_LIST_QUERY);

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold mb-12">Unsere Kurse</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {kurse.map((kurs: any) => (
          <Link
            key={kurs._id}
            href={`/kurse/${kurs.slug}`}
            className="border rounded-2xl p-8 hover:border-black transition"
          >
            <h2 className="text-2xl font-medium mb-3">{kurs.name}</h2>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Alter: {kurs.altersempfehlung}</p>
              <p>
                Start:{" "}
                {new Date(kurs.startDatum).toLocaleDateString("de-DE")}
              </p>
              <p className="font-semibold text-black">{kurs.preis} €</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
