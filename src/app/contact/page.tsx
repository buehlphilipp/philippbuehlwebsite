import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="bg-black bg-opacity-85 p-4 mb-8">
        <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-bold underline decoration-green-500 decoration-3">
            <a href="/" >Philipp Buehl</a>
            </div>
            <div>
                <a href="/" className="hover:text-white mx-2 text-gray-400">Home</a>
                <a href="/business" className="hover:text-white mx-2 text-gray-400">Business</a>
                <a href="/traveling" className="hover:text-white mx-2 text-gray-400">Traveling</a>
                <a href="/contact" className="hover:text-white mx-2 text-gray-400">Contact</a>
            </div>
        </div>
    </nav>

    <div className="items-center justify-center bg-cover bg-center h-screen">
        <div className="bg-black bg-opacity-75 p-8 rounded-sm ml-8 mr-8 text-white">
            <h1 className="text-4xl mb-4 underline decoration-green-500 decoration-3">Imprint & Contact</h1>
            <p className="mb-4">Angaben gem. § 5 TMG:</p>
            <p className="mb-4">Philipp Bühl<br/>
            51069 Köln,<br/>
            Deutschland<br/>
            philippstravelstories@gmail.com</p>

            <p className="mb-4">Haftung für Inhalte<br/>
            Alle Inhalte wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>

            <p className="mb-4">Die genaue Anschrift kann im Rechtsfall erfragt werden.</p>

            <p className="mb-4">Disclaimer – rechtliche Hinweise § 1 Warnhinweis zu Inhalten</p>

            <p className="mb-4">Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.</p>

            <p className="mb-4">§ 2 Externe Links<br/>
            Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.</p>

            <p className="mb-4">§ 3 Urheber- und Leistungsschutzrechte<br/>
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.</p>

            <p className="mb-4">§ 4 Besondere Nutzungsbedingungen<br/>
            Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.<br/>
            Quelle: Impressum Muster von JuraForum.de</p>

            <p className="mb-4">Keine Abmahnung ohne vorherigen Kontakt! Sollte der Inhalt oder die Aufmachung dieser Website fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen, so bitte ich um eine entsprechende Nachricht ohne Kostennote. Ich garantiere, dass die zu Recht beanstandeten Passagen unverzüglich entfernt werden, ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen ohne vorherige Kontaktaufnahme ausgelöste Kosten werden ich vollständig zurückweisen und gegebenenfalls eine Gegenklage wegen Verletzung vorher genannter Bestimmungen einreichen.</p>
        </div>
    </div>
    </main>
  );
}

