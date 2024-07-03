import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-rows-2 grid-flow-col gap-2">
        <div>
        <p className="text-neutral-100 text-5xl items-center justify-center font-semibold lg:flex underline decoration-green-500 decoration-3"><a href="/">Philipp Buehl</a></p>
      </div>
      <div>
        <p className="text-neutral-100 text-md items-center justify-center font-light lg:flex">World Traveler and Co-Founder</p>
      </div>
      </div>

      <div className="text-neutral-100 hover:text-neutral-100 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="/"
          className="group rounded-lg border px-5 py-4 transition-colors border-neutral-100/0 border-neutral-900 bg-neutral-800/30 dark:border-neutral-700 dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-80">
            You're here already. Don't click this.
          </p>
        </a>

        <a
          href="/business"
          className="group rounded-lg border px-5 py-4 transition-colors border-neutral-100/0 hover:border-neutral-900 hover:bg-neutral-800/50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Business{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-80">
            Find out more about my different startup businesses.
          </p>
        </a>

        <a
          href="/traveling"
          className="group rounded-lg border px-5 py-4 transition-colors border-neutral-100/0 hover:border-neutral-900 hover:bg-neutral-800/50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Traveling{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-80">
            Let me tell you about my journey to every country on the planet.
          </p>
        </a>

        <a
          href="/contact"
          className="group rounded-lg border px-5 py-4 transition-colors border-neutral-100/0 hover:border-neutral-900 hover:bg-neutral-800/50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-80">
            Here you can find my contact details and Imprint.
          </p>
        </a>
      </div>
    </main>
  );
}
