import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { PROJEKTE_LIST_QUERY } from "@/lib/sanity.queries";
import CardItem from "@/components/CardItem";

export const dynamic = "force-dynamic";

export const metadata = {
  title: 'Projekte | Künstlerei',
};

export default async function ProjektePage() {
  const projekte = await client.fetch(PROJEKTE_LIST_QUERY);

  return (
    <main className="max-w-6xl mx-auto px-4 min-h-screen">
      <h1 className="text-4xl font-bold mb-12">Projekte</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {projekte.map((projekt: any) => (
          <Link
            key={projekt._id}
            href={`/projekte/${projekt.slug}`}
            className="hover:opacity-90 transition block"
          >
            <CardItem
              title={projekt.name}
              subtitle={projekt.untertitel || "Projekt"} 
              imageUrl={projekt.image}
              badges={[]} // Keine Badges
            />
          </Link>
        ))}
      </div>
    </main>
  );
}