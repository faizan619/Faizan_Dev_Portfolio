export default function Hero(){
    return(
        <section className="h-screen flex items-center dark:bg-gray-700 dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-7xl font-extrabold">Faizan Alam</h1>
                <p className="px-8 mt-8 mb-12 text-xl text-green-400 uppercase">Full Stack Developer <span className="block text-lg text-white"> Software Engineer and UI Designer</span> </p>
                <div className="flex flex-wrap justify-center">
                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Resume</button>
                    <button className="px-8 py-3 m-2 text-lg  border rounded dark:text-gray-50 dark:border-white">Contact Me!</button>
                </div>
            </div>
        </section>
    )
}