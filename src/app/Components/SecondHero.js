import Image from "next/image";
import MyImg from "../../../public/faizannew.png";
import JourneyData from "../api/journeydata";
export default function Second() {
  return (
    // <section className="bg-[#01003d] text-white">
    <section className="bg-slate-100 dark:bg-[#1c1e29] ">
    {/* bg-neutral-100 
        bg-slate-100
    */}
      <div className="flex flex-col items-center ">
        {/* <div className=""> */}
        <h1 className="text-3xl sm:text-4xl font-semibold mt-10 text-center text-[#01003d] dark:text-[#4171f5]">About Me</h1>
        <div className="p-3 flex flex-col items-center md:flex-row">
            <Image
            className="object-contain md:w-[50%] h-96 pb-5 rounded-2xl"
            alt="My Image" src={MyImg} />
            <div className="md:w-[40%] ">
              <h1 className="text-black text-lg dark:text-white ">
              Hello! I am a 
              <span className="dark:text-blue-400 "> Full Stack Developer</span> who
              specializes in building the frontend using React.js and
              implementing the backend logic in Node.js. Additionally, I
              leverage the <span className="dark:text-blue-400">Next.js framework </span>
              to seamlessly manage both the front-end and back-end components,
              contributing to the overall success of the projects.
              </h1>
            </div>
          </div>
        {/* </div> */}
        <div className="px-3" >
          <div className="p-4">
            <h1 className="text-center text-3xl font-semibold my-4 sm:text-4xl text-[#01003d] dark:text-[#4171f5]">My Journey</h1>
            <ol className="relative border-s border-[#01003d] dark:border-gray-700">
              {JourneyData.map((item)=>(
                  <li className="mb-10 ms-6" key={item.id}>
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-[#01003d] dark:ring-gray-900 dark:bg-blue-900">
                      <svg 
                        className="w-2.5 h-2.5 text-[#01003d] dark:text-blue-300 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20" 
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-[#01003d] dark:text-white">
                      {item.title}
                      {item.latest?(
                      <span className="bg-blue-800 text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span>):(null)}
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-600 leading-none dark:text-white">
                      {item.date}
                    </time>
                    <p className="mb-4 text-base font-normal text-black dark:text-gray-300">
                      {item.info}
                    </p>
                    {item.certificate!=null?(
                        <a
                          href={item.certificate}
                          target="_blank"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#01003d]  border border-[#01003d] rounded-lg hover:bg-blue-950 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" >
                          <svg className="w-3.5 h-3.5 me-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
                          View Certificate
                        </a>
                        ):(
                          null
                        )
                    }
                  </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
