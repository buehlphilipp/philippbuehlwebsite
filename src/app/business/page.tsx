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

    <div className="bg-black bg-opacity-75 p-8 rounded-sm ml-8 mr-8 text-white">
            <h1 className="text-4xl mb-4 underline decoration-green-500 decoration-3">Business</h1>
            <p className="mb-4 text-justify">I've always had a genuine passion for business and entrepreneurship. After completing my Bachelor’s degree at the University of Cologne in 2022, I've been working on various projects to make the world a better place. With two of my current projekts me and my team are aiming for maximum social impact to increase people's quality of life long-term.</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 g-opacity-75 p-8 rounded-sm ml-8 mr-8 text-white">
        <div>
          <h1 className="text-xl text-bold text-center">Brick</h1>
          <p className="text-neutral-400 text-justify">Brick is a company that helps people find their new homes more efficiently. It's still in the building phase so we're not talking big about it. But once the platform goes public we'll let you know more ;)</p>

        </div>
        <div>
        <h1 className="text-xl text-bold text-center">Every Country Tours</h1>
        <p className="text-neutral-400 text-justify">Every Country Tours is a platform that connects travelers with local tour guides and fixers. Its focus is helping travelers to visit countries that are hard to visit alone. We help with organizing visas, hook you up with a 2-week trip through Afghanistan or pick you up at the airport in a Lamborghini for your luxury one-day-layover in Dubai.<br/> It'll be online in just a few weeks :)</p>

        </div>
        <div>
        <h1 className="text-xl text-bold text-center">Codeshare</h1>
        <p className="text-neutral-400 text-justify">Lets just say: You know those moments when you're somewhere on your own but you wish there were someone with you? This company solves that problem.<br/> Will still take a little while to be available to the public, though!</p>

        </div>
      </div>
    </div>
    </main>
  );
}
