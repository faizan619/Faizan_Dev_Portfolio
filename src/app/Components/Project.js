import Link from "next/link";
import Project from "../api/projectdata";

function ProjectPage(){
    return(
        <div className="dark:bg-[#1c1e29] flex flex-col  items-center px-1 bg-slate-100 text-[#01003d]">
            <div className="flex flex-col items-center ">
                <h1 className="dark:text-[#4171f5] text-4xl font-semibold m-2 pt-5">Projects</h1>
                <p className="dark:text-gray-300 text-gray-800 text-lg xl:w-[40rem] text-center m-2">Here you will find some of the project that i have created. Each Project containing its source code and live preview</p>
            </div>
            <div className="my-7 flex flex-col gap-20 ">
            {/* border sm:border-red-700 md:border-blue-700 lg:border-green-800 xl:border-yellow-500 */}
            {
                Project.map((item)=>(
                    <div key={item.id} className="flex flex-col items-center lg:flex-row ">
                        <div className=" lg:w-[60%] py-5  ">
                            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                                    <img src={item.imgsrc} className="block h-[156px] md:h-[278px] w-full rounded-lg" alt=""/>
                                    {/* <video src="/video1.webm" autoPlay loop muted/> */}
                                </div>
                            </div>
                            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                            </div>
                        </div>
                        <div className="lg:w-[40%] p-4  flex items-center ">
                            <div className="flex flex-col gap-4  px-3 ">
                                <h1 className="dark:text-[#4171f5] text-2xl font-semibold text-center md:text-3xl lg:text-2xl">{item.name}</h1>
                                <p className="dark:text-gray-300 text-gray-800 text-lg">{item.projinfo}</p>
                                <div className="my-5 flex justify-center gap-5 sm:gap-10 text-sm ">
                                    <Link className="border hover:scale-105 px-1 sm:px-3 xl:px-10 rounded-xl hover:cursor-alias text-white bg-[#01003d] py-3" target="_blank" href={item.source}>Source Code</Link>
                                    <Link className="dark:text-white dark:border-white border hover:scale-105 border-[#01003d] px-1 sm:px-3 xl:px-10 rounded-xl  py-3 cursor-alias" target="_blank" href={item.live}>Live Preview</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
export default ProjectPage