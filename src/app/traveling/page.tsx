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
      <div className="bg-black grid lg:grid-cols-3 md:grid-cols-2 bg-opacity-75 p-8 rounded-sm ml-8 mr-8 text-white">
        <div>
        <div className="relative overflow-hidden">
      <Image src="/Samarkand1.jpg" width={1500} height={500} alt="Samarkand1"/>
      <div className="absolute h-full w-full bg-black/50 flex items-center justify-center text-center bottom-0 opacity-0 hover:opacity-100 transition duration-300 font-light text-2xl">Samarkand, Uzbekistan</div>
      </div>
      </div>
      <div className="bg-black col-span-2 bg-opacity-75 p-8 rounded-sm mr-8 text-white">
            <h1 className="text-4xl mb-4 underline decoration-green-500 decoration-3">My journey to every country on the planet</h1>
            <p className="mb-4">I’ve always loved traveling. Growing up in Germany, close to the Dutch border, I always found it so fascinating how the concepts of countries and borders work. I would cross nearby borders (be it country, state or city borders) just so I can say “I’ve been to xyz today” and honestly, I still do that sometimes.</p>
            <p className="mb-4">At some point – I think I was 16 – I decided that I want to travel to as many countries as possible (maybe even every country in the world). Today I know that visiting every country actually is a realistic goal many people have achieved already, so that’s what I’m pursuing at the moment.</p>
            <p className="mb-4">After getting my Bachelor’s degree in Business Administration in 2022 I decided to make traveling the focus of my life for the next couple of years. And to combine my passion for traveling and aviation with my job, I’m now working as a flight attendant based in Frankfurt, Germany.</p>
            <p className="mb-4">If you'd like to follow my adventures, take a look at my Instagram profile <a href="https://www.instagram.com/buehlphilipp" className="underline underline-offset-1 decoration-green-500 decoration-2 font-bold">@buehlphilipp</a>  :)</p>
      </div>
      </div>
      <div className="bg-black p-8 bg-opacity-75 rounded-sm ml-8 mr-8 text-white col-span-3">
      <h1 className="text-3xl mb-4 underline decoration-green-500 decoration-3">My travel map</h1>
            <p className="mb-4">Here you can see a map of all the countries I've been to so far. As of June 2024 I've been to 113 out of the 195 U.N. recognized countries. My first goal was to visit every country in the Americas - a continent where I speak all major languages (English, French, Spanish, Portuguese). In Europe I'm now only missing Belarus and Asia, Africa and Oceania are going to be long-term projects I'm already really excited about!</p>
    <Image src="/TRAVEL_MAP.png" width={1500} height={500} alt="worldMap"/>
     </div>
     <div className="bg-black grid grid-cols-3 bg-opacity-75 p-8 rounded-sm ml-8 mr-8 gap-4 text-white">
      <div className="relative overflow-hidden">
        <Image src="/Baku.jpg" width={500} height={500} alt="Baku"/>
        <div className="absolute h-full w-full bg-black/50 flex items-center justify-center text-center bottom-0 opacity-0 hover:opacity-100 transition duration-300 font-light text-2xl">Baku, Azerbaijan</div>
      </div>
      <div className="relative overflow-hidden">
      <Image src="/StLucia.jpg" width={500} height={500} alt="StLucia"/>
      <div className="absolute h-full w-full bg-black/50 flex items-center justify-center text-center bottom-0 opacity-0 hover:opacity-100 transition duration-300 font-light text-2xl">Soufriere, St. Lucia</div>
        </div>
      <div className="relative overflow-hidden">
        <Image src="/Majuro.jpg" width={500} height={500} alt="Majuro"/>
        <div className="absolute h-full w-full bg-black/50 flex items-center justify-center text-center bottom-0 opacity-0 hover:opacity-100 transition duration-300 font-light text-2xl">Majuro, Marshall Islands</div>
        </div>
        <div className="relative overflow-hidden">
          <Image src="/Namibia.jpg" width={500} height={500} alt="Namibia"/>
          <div className="absolute h-full w-full bg-black/50 flex items-center justify-center text-center bottom-0 opacity-0 hover:opacity-100 transition duration-300 font-light text-2xl">Namibia</div>
          </div>
          <div className="relative overflow-hidden">
          <Image src="/Samarkand2.jpg" width={500} height={500} alt="Samarkand2"/>
      <div className="absolute h-full w-full bg-black/50 flex items-center justify-center text-center bottom-0 opacity-0 hover:opacity-100 transition duration-300 font-light text-2xl p-8">Samarkand, Uzbekistan<br/>with Jannis and Silas</div>
      </div>
      <div className="relative overflow-hidden">
        <Image src="/Nauru.jpg" width={500} height={500} alt="Nauru"/>
        <div className="absolute h-full w-full bg-black/50 flex items-center justify-center text-center bottom-0 opacity-0 hover:opacity-100 transition duration-300 font-light text-2xl p-8">Nauru with Luca</div>
</div>
    </div>
  </div>
    </main>
  );
}
