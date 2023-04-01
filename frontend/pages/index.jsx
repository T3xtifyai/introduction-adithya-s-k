import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <img
        src="./ai.webp"
        alt=""
        className="absolute top-0 right-0 z-10 h-[100vh]"
      />
      <section className="h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-black">
        <div className="w-[60vw]">
          <div>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl">
                StudyPal
              </span>{' '}
              <br />
              Your Personal AI Study Buddy!
            </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 w-[50vw]">
              Are you struggling to keep up with your studies? Do you wish you
              had a personal tutor who could guide you through your study
              materials and help you ace your exams? Look no further than
              StudyPal - your very own AI study buddy!
            </p>
          </div>

          <Link
            href="/upload"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mt-4 "
          >
            Get Started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>
      <section className="h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-">
        <div>
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
