export const metadata = {
  title: 'AGB | Künstlerei',
};

export default function AGBPage() {
  return (
    <main className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">
        Allgemeine Geschäftsbedingungen
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. Anmeldung und Bezahlung</h2>
        <p className="mb-4">
          Bitte melden Sie sich oder Ihr Kind mit unserem Online-Formular oder in der Kunstakademie, Kaiserstraße 29, schriftlich mit dem Formular, das Sie dort erhalten, an. Diese Anmeldung ist verbindlich.
        </p>
        
        <p className="font-bold mb-2">Das bedeutet:</p>
        <p className="mb-4">
          Bitte zahlen Sie vor dem ersten Termin den fälligen Kursbeitrag unter Angabe der Kursbezeichnung auf eines unserer Konten ein:
        </p>

        <div className="mb-6 ml-6">
          <p className="font-bold">VR Bank eG Würselen</p>
          <p className="mb-2">DE43 3916 2980 0120 7700 12</p>
          
          <p className="font-bold">Sparkasse Aachen</p>
          <p>DE34 3905 0000 1070 9282 78</p>
        </div>

        <p className="mb-4">
          Sollten Sie sich dazu entscheiden, doch nicht an dem gebuchten Kurs/Workshop teilzunehmen: Sie können bis 10 Tage vor Beginn von der Buchung zurücktreten. Danach erheben wir eine Gebühr von 20 % des fälligen Betrags.
        </p>

        <p className="mb-2">Sollten Sie sich nach Kursbeginn dazu entscheiden, nicht teilzunehmen, gilt folgendes:</p>
        <p className="mb-4">
          Nach einmaliger Teilnahme und Rücktritt von der Buchung erheben wir eine Gebühr von 50 %, ab der zweiten Teilnahme ist die gesamte Kursgebühr fällig.
        </p>

        <p className="mb-4">
          Sollten während der Kurseinheit Termine ausfallen, weil die/der Dozent_in verhindert ist, werden wir uns bemühen, diese Termine nachzuholen. Ist das nicht möglich, werden die Gebühren für den Ausfall zurückerstattet. Sollten Sie/Ihr Kind an Terminen nicht teilnehmen können, können wir die Gebühr für diesen Ausfall nicht erstatten. Termine die wegen „höherer Gewalt“ (Wetterereignisse o.ä.) ausfallen, werden nicht erstattet.
        </p>

        <p className="mb-4">
          Für eventuelle Ermäßigungen sprechen Sie uns bitte persönlich an.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. Aufsichtspflicht</h2>
        <p className="mb-4">
          Unsere Aufsichtspflicht über Ihre angemeldeten, teilnehmenden Kinder beginnt mit Eintritt des Kindes zum Kursbeginn ohne Begleitung in unsere Veranstaltungsräume. Bitte sorgen Sie dafür, dass Ihr/e Kinder/er pünktlich zu Beginn des Kurses anwesend sind. Für Wege und Wartezeiten übernehmen wir keine Aufsichtspflicht und keine Verantwortung.
        </p>
        <p className="mb-4">
          Die Aufsichtspflicht endet mit Ende der Kurseinheit. Auch hier bitten wir um pünktliches Abholen, da wir für Wartezeiten keine Aufsichtspflicht und keine Verantwortung übernehmen.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. Veröffentlichungen / Fotos</h2>
        <p className="mb-4">
          Wir versichern an dieser Stelle, mit Fotos und Veröffentlichungen verantwortungsvoll umzugehen. Mit der Teilnahme an unseren Veranstaltungen erlauben Sie uns, Fotos von Ihnen oder von Ihrem Kind (ohne Namensnennung), von Ihren Werken und Werken Ihres Kindes (eventuell mit Namensnennung) für unsere Veröffentlichungen (Druck und/oder digitale Medien) zu verwenden.
        </p>
        <p className="mb-4">
          Ohne diese Erlaubnis ist eine Teilnahme an unseren Veranstaltungen leider nicht möglich.
        </p>
      </section>
    </main>
  );
}