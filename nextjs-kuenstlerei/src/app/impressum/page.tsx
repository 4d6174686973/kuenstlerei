export const metadata = {
  title: 'Impressum | Künstlerei',
};

export default function ImpressumPage() {
  return (
    <section className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Impressum</h1>
        <p className="mb-6">
            Kunstakademie Würselen e.V. <br />
            Kaiserstraße 29 <br />
            52146 Würselen
        </p>
        <p className="mb-6">
            +49 (0) 175 5952908 <br />
            kunstakademie@online.de <br />
            www.kunstakademie.art <br />
        </p>
        <p className="mb-6">
            Vertretungsberechtigte Geschäftsführerin: Susanne Mix
        </p>
    </section>
  );
}
