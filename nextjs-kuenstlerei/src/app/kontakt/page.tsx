import { MapPin, Mail, Phone } from "lucide-react";

export const metadata = {
  title: 'Kontakt | Künstlerei',
};

export default function KontaktPage() {
  // Der direkte Embed-Link für die Adresse (Kaiserstraße 29, Würselen)
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.671392813158!2d6.131238477144186!3d50.818742861344495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c098d28176335d%3A0x47088989af99036d!2sKaiserstra%C3%9Fe%2029%2C%2052146%20W%C3%BCrselen!5e0!3m2!1sde!2sde!4v1715600000000!5m2!1sde!2sde";

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-10">Kontakt</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informationen */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1 uppercase tracking-widest text-[10px] text-slate-500">Anschrift</h3>
                <p className="text-lg leading-relaxed">
                  Kunstakademie Würselen<br />
                  Kaiserstraße 29<br />
                  52146 Würselen
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-slate-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1 uppercase tracking-widest text-[10px] text-slate-500">Email</h3>
                <a href="mailto:kunstakademie@online.de" className="text-lg hover:underline transition">
                  kunstakademie@online.de
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-slate-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1 uppercase tracking-widest text-[10px] text-slate-500">Telefon</h3>
                <a href="tel:+491755952908" className="text-lg hover:underline transition">
                  +49 (0)175 595 2908
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Karte ohne API-Key */}
        <div className="w-full h-[450px] border border-slate-200 shadow-sm relative overflow-hidden bg-slate-100">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Standort"
          ></iframe>
        </div>
      </div>
    </section>
  );
}