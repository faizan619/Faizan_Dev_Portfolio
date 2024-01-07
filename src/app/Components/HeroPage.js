import Image from "next/image";
// import './style/hero.css'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-800 to-blue-300">
      
      <div className="flex flex-col items-center min-h-[36rem] justify-evenly py-16 px-2">
        <h1 className="font-extrabold text-6xl text-white text-center sm:text-7xl">
          Faizan Alam
        </h1>
        <div className="text-center">
          <p className="text-2xl font-extrabold text-[#01003d] bg-white rounded-lg sm:text-3xl">
            Full Stack Developer
          </p>
          <p className="pt-3 text-xl font-bold sm:text-2xl text-white">
            Software Engineer and UI Designer
          </p>
        </div>
        <div className="flex gap-5 lg:gap-10">
          <button className="rounded px-4 py-2 bg-white border-white border hover:bg-blue-900 text-[#01003d] font-semibold sm:text-xl">
            Resume
          </button>
          <button className="dark:border border-white text-white border rounded px-4 py-2 font-semibold sm:text-xl">
            <a href="#project">Projects</a>
          </button>
        </div>
      </div>
    </section>
  );
}
/* <section className="min-h-screen flex items-center dark:bg-gray-700 dark:text-gray-100">
    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-7xl font-extrabold">Faizan Alam</h1>

        <p className="px-8 mt-8 mb-12 text-xl text-green-400 uppercase">Full Stack Developer <span className="block text-lg text-white"> Software Engineer and UI Designer</span> </p>

        <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Resume</button>
            <button className="px-8 py-3 m-2 text-lg  border rounded dark:text-gray-50 dark:border-white">Contact Me!</button>
        </div>
    </div>
</section> */
