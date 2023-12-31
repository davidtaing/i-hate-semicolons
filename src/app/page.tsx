import { TweetWall } from "./TweetWall";

export default function Home() {
  return (
    <main className="prose dark:prose-invert max-w-full m-auto p-4">
      <div className="text-center flex flex-col justify-center">
        <h1 className="text-[2.5rem] mt-32 mb-0">
          Never get <span
            className="bg-gradient-to-r from-indigo-500 from-60% to-indigo-900 dark:to-indigo-100 text-transparent bg-clip-text"
          >anything done again</span
          >
        </h1>
        <p className="mt-7 mb-0">
          This is where we&apos;d put our value proposition.<br />
          If we had one.
        </p>
        <div className="mt-8 flex gap-6 justify-center">
          <a href="">
            <button
              className="px-3 py-2.5 border border-black dark:border-white rounded-2xl"
            >Get Started</button
            >
          </a>
          <button
            className="px-3 py-2.5 border border-black bg-zinc-800 text-white medium rounded"
          >
            <code className="text-white hover text-lg">
              {">"} cmd + f, ; <span className="text-zinc-300 text-md">(beta)</span>
            </code>
          </button>
        </div>
      </div>
      <div className="flex justify-center my-16">
        <svg
          width="6"
          height="19"
          viewBox="0 0 6 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-zinc-800 dark:text-zinc-200"
        >
          <path
            d="M4.76207 11.6136L4.66832 12.5511C4.59446 13.3011 4.45241 14.0483 4.24219 14.7926C4.03764 15.5426 3.82173 16.2216 3.59446 16.8295C3.37287 17.4375 3.19389 17.9148 3.05753 18.2614H0.705256C0.790483 17.9261 0.90696 17.4574 1.05469 16.8551C1.20241 16.2585 1.34162 15.5881 1.4723 14.8438C1.60298 14.0994 1.68537 13.3409 1.71946 12.5682L1.76207 11.6136H4.76207ZM3.24503 5.05114C2.68253 5.05114 2.19957 4.85227 1.79616 4.45455C1.39844 4.05682 1.19957 3.57386 1.19957 3.00568C1.19957 2.44886 1.39844 1.97443 1.79616 1.58239C2.19957 1.18466 2.68253 0.985795 3.24503 0.985795C3.79048 0.985795 4.26776 1.18466 4.67685 1.58239C5.08594 1.97443 5.29048 2.44886 5.29048 3.00568C5.29048 3.38636 5.19389 3.73295 5.00071 4.04545C4.81321 4.35227 4.56605 4.59659 4.25923 4.77841C3.95241 4.96023 3.61435 5.05114 3.24503 5.05114Z"
            fill="currentColor"
          >
          </path>
        </svg>
      </div>
      <div className="text-center flex flex-col justify-center">
        <h1 className="mt-20 mb-0">Hated by Developers Across the World</h1>
        <TweetWall />
      </div>
    </main>
  )
}