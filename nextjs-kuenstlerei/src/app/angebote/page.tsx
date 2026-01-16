import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { ANGEBOTE_LIST_QUERY } from "@/lib/sanity.queries";
import CardItem from "@/components/CardItem";

export const dynamic = "force-dynamic";

// Helferfunktion zum Kürzen des Textes
const truncateText = (text: string, length: number) => {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
};

export default async function AngebotePage() {
  const angebote = await client.fetch(ANGEBOTE_LIST_QUERY);

  return (
    <main className="max-w-6xl mx-auto py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-12">Unsere Angebote</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {angebote.map((angebot: any) => (
          <Link
            key={angebot._id}
            href={`/angebote/${angebot.slug}`}
            className="hover:opacity-95 transition block"
          >
            <CardItem
              title={angebot.titel}
              subtitle={truncateText(angebot.beschreibung, 120)}
              imageUrl={angebot.imageUrl}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}