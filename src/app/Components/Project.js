import Link from "next/link";
import Project from "../api/projectdata";

export default function(){
    return(
        <div className="flex flex-col items-center px-5">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold m-2">Projects</h1>
                <p className="text-gray-400 text-lg w-[40rem] text-center m-2">Here you will find some of the project that i have created. Each Project containing its source code and live preview</p>
            </div>
            <div className="my-7 flex flex-col gap-20">
            {
                Project.map((item)=>(
                    <div className="flex justify-center ">
                        <div className=" w-[60%] py-5">
                            
                            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                                <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                                    <img src={item.imgsrc} class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt=""/>
                                </div>
                            </div>
                            <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                                <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                            </div>
                        </div>
                        <div className="w-[40%] p-4  flex items-center border-red-700">
                            <div className="flex flex-col gap-4  px-3 ">
                                <h1 className="text-2xl font-semibold text-center">{item.name}</h1>
                                <p className="text-gray-400 text-lg">{item.projinfo}</p>
                                <div className="my-5 flex justify-center gap-10 text-md">
                                    <Link className="border px-10 rounded-xl hover:cursor-alias bg-violet-600 py-3" target="_blank" href={item.source}>Source Code</Link>
                                    <Link className="border px-10 rounded-xl bg-gray-600 py-3 cursor-alias" target="_blank" href={item.live}>Live Preview</Link>
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