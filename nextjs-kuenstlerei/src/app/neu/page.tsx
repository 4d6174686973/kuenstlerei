import { client } from "@/lib/sanity.client";
import { NEU_LIST_QUERY } from "@/lib/sanity.queries";
import NeuigkeitenClient from "./NeuigkeitenClient";

export const metadata = { title: 'Neu | Künstlerei' };

export default async function NeuPage() {
  const allNews = await client.fetch(NEU_LIST_QUERY);
  
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-12">Neuigkeiten & Events</h1>
      <NeuigkeitenClient initialData={allNews} />
    </main>
  );
}