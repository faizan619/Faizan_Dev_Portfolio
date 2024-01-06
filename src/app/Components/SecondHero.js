import Image from "next/image";
import MyImg from "../../../public/faizan1.png";
export default function Second() {
  return (
    <section className="bg-[#01003d] text-white">
    {/* <section className="bg-gradient-to-b from-blue-300 to-blue-700">  */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mt-6 text-center">About Me</h1>
        <div className="px-3 flex flex-col items-center md:flex-row  ">
          <Image
            className="object-contain md:w-[50%] h-96 pb-5"
            alt="My Image"
            src={MyImg}
          />
          {/* <div className="pb-5 md:w-[50%] border">
                        </div> */}
          <div className="md:w-[40%] ">
            {/* <p className="text-center text-xl capitalize p-3 underline mb-4 ">Get to know me!</p>  */}
            <h1 className="text-gray-300 text-lg">
              Hello! I am a 
              <span className="dark:text-white"> Full Stack Developer</span> who
              specializes in building the frontend using React.js and
              implementing the backend logic in Node.js. Additionally, I
              leverage the <span className="dark:text-white">Next.js framework</span>{" "}
              to seamlessly manage both the front-end and back-end components,
              contributing to the overall success of the projects.
            </h1>
          </div>
        </div>
        <div className="px-3">
          <div className="p-4">
            <h1 className="text-center text-3xl font-semibold my-4 sm:text-4xl">My Journey</h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-800 dark:dark:text-white">
                  MERN Stack Developer Course
                  <span className="bg-blue-800 text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                    Latest
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none dark:text-white dark:text-gray-500">
                  Completed on December 28th, 2023
                </time>
                <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
                  In this course, I have gained knowledge about advanced topics in React. Additionally, I have acquired insights into backend development using Node.js for the creation of a comprehensive blog web application.
                </p>
                <a
                  href="https://raw.githubusercontent.com/faizan619/Faizan_Dev_Portfolio/main/public/faizan_mern_certificate.jpg" download="certificate.jpg"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg className="w-3.5 h-3.5 me-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
</svg>
                  View Certificate
                </a>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-blue-800 dark:dark:text-white">
                  Flowbite Figma v1.3.0
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none dark:text-white dark:text-gray-500">
                  Released on December 7th, 2021
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-blue-800 dark:dark:text-white">
                  Flowbite Library v1.2.2
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none dark:text-white dark:text-gray-500">
                  Released on December 2nd, 2021
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
              <li className="my-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-800 dark:dark:text-white">
                  Flowbite Application UI v2.0.0{" "}
                  <span className="bg-blue-800 text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                    Latest
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none dark:text-white dark:text-gray-500">
                  Released on January 13th, 2022
                </time>
                <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    className="w-3.5 h-3.5 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  Download ZIP
                </a>
              </li>
              <li className="my-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-800 dark:dark:text-white">
                  Flowbite Application UI v2.0.0
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none dark:text-white dark:text-gray-500">
                  Released on January 13th, 2022
                </time>
                <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    className="w-3.5 h-3.5 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>{" "}
                  Download ZIP
                </a>
              </li>

              <li className="mb-10 ms-6 ">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-blue-800 dark:dark:text-white">
                  Flowbite Figma v1.3.0
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none  dark:text-gray-500">
                  Released on December 7th, 2021
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
            </ol>
          </div>
          {/* <a rel="noopener noreferrer" href="#" className="">Contact</a> */}
        </div>
      </div>
    </section>
  );
}
