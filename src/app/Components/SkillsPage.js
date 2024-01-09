import Data from "../api/skilldata"
export default function Skill(){

    
    return( 
        // <div className="p-3 py-10 text-center min-h-[15rem] bg-[#01003d] text-white">
        <div className="p-3 py-10 text-center min-h-[15rem] bg-slate-100  text-white dark:bg-[#1c1e29]">
            <h1 className="text-3xl p-5 font-bold sm:text-4xl text-[#01003d] dark:text-[#4171f5]">Skills</h1>
            <div className="flex flex-wrap gap-4 justify-center">
            {
                Data.map((item)=>(
                    <div key={item.id} className="bg-[#01003d] capitalize px-4 py-1 rounded-md text-gray-200 dark:bg-white dark:text-[#01003d] ">{item.lang}</div>
                ))
            }

            </div>
        </div>
    )
}