import Link from "next/link";


export default async function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Künstlerei</h1>
      <Link href="/kurse" className="underline">
        Unsere Kurse
      </Link>
    </main>
  );
}