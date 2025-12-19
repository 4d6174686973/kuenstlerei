export const metadata = {
  title: 'Kontakt | Künstlerei',
};

export default function KontaktPage() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>

      <div className="space-y-4">
        <p>
          Kunstakademie Würselen<br />
          Kaiserstraße 29<br />
          52146 Würselen
        </p>

        <p>
          <strong>Email:</strong> kunstakademie@online.de<br />
          <strong>Telefon:</strong> +49 (0)175  595 2908
        </p>
      </div>
    </section>
  );
}
