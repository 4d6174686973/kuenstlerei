import Link from "next/link";

export const metadata = {
  title: 'Künstlerei',
};

export default async function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Künstlerei</h1>
      <p className="mb-6">
        Willkommen bei der Künstlerei! Entdecken Sie unser vielfältiges Kursprogramm
      </p>
      <Link
        href="/kursprogramm"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Zum Kursprogramm
      </Link>
    </main>
  );
}