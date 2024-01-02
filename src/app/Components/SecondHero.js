import Image from "next/image"
import MyImg from '../../../public/vercel.svg'
export default function Second(){
    return(
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-5 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Image className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" alt="My Image" src={MyImg} />
                </div>
                <div className="flex flex-col justify-center p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <div className="text-left text-lg mb-10">
                    <p className="text-lg sm:mb-6">Get to know me!</p> 
                        <h1 className="">Hello! I'm a passionate <span className="uppercase underline"> Full Stack Developer</span> building the Front-end of Websites and Web Application using React.js or Next.js and writing the Backend logic in Nodjs that leads to the success of the overall product. Check out some of my work in the <a href="#project" className="underline">Project</a> section.
                        </h1>
                        <h1>I have graduated with a Bachelor's degree in Computer Science from Mumbai University, India in 2024.</h1>
                        <h1>I'm open to <span className="underline">Job opportunities </span> where i can contribute, learn and grow. If you have a good oppertunity that matches my skills and experience then don't hesitate to <span className="underline">Contact</span> me.</h1>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    )
}