// app/kurse/[slug]/not-found.tsx
export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-semibold mb-4">Kurs nicht gefunden</h1>
      <p className="text-gray-600 mb-8">
        Der angeforderte Kurs existiert nicht oder wurde verschoben.
      </p>
      <a
        href="/kurse"
        className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Zurück zu allen Kursen
      </a>
    </main>
  );
}