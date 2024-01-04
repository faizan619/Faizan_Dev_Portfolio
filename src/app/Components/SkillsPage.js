import Data from "../api/data"
export default function Skill(){

    
    return(
        <div className="p-3 mt-10 text-center h-[15rem]">
            <h1 className="text-3xl p-5 font-extrabold sm:text-4xl">Skills</h1>
            <div className="flex flex-wrap gap-4 justify-center">
            {
                Data.map((item)=>(
                    <div className="bg-gray-800 capitalize px-4 py-1 rounded-md text-gray-200">{item.lang}</div>
                ))
            }

            </div>
        </div>
    )
}