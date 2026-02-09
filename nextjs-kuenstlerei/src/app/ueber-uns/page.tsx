import { client } from "@/lib/sanity.client";
import { TEAM_QUERY } from "@/lib/sanity.queries";
import CardItem from "@/components/CardItem";

export const dynamic = "force-dynamic";

export const metadata = {
  title: 'Über Uns | Künstlerei',
};

export default async function KontaktPage() {
  const team = await client.fetch(TEAM_QUERY);

  return (
    <main className="max-w-3xl py-12 min-h-screen">
      <section className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold mb-6">Über Uns</h1>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            Die Kunstakademie Würselen wurde im Jahr 2011 als Verein gegründet. 
            Seitdem betreibt unser Verein die Kunstakademie, vormals in der Klosterstraße 7 
            und jetzt in unseren neuen Räumen in der Kaiserstraße 29. 
            Dort bieten wir Kunstkurse und -Kreativevents aller Art für Jung und Alt an.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mb-16">
        <h2 className="text-3xl font-bold mb-10">Unser Team</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {team.map((mitglied: any) => (
            <div key={mitglied._id} className="w-full">
              <CardItem
                title={mitglied.name}
                subtitle={[mitglied.email, mitglied.handynummer].filter(Boolean).join(" | ")}
                imageUrl={mitglied.fotoUrl}
                badges={[
                  { 
                    text: mitglied.title1, 
                    className: "bg-slate-100 text-slate-600 hover:bg-slate-100" 
                  },
                  ...(mitglied.title2 ? [{ 
                    text: mitglied.title2, 
                    className: "bg-stone-200 text-stone-700 hover:bg-stone-200" 
                  }] : [])
                ].filter(badge => badge.text)}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}