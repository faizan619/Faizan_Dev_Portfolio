import Data from "../api/skilldata"
export default function Skill(){

    
    return( 
        // <div className="p-3 py-10 text-center min-h-[15rem] bg-[#01003d] text-white">
        <div className="p-3 py-10 text-center min-h-[15rem] bg-white  text-white">
            <h1 className="text-3xl p-5 font-extrabold sm:text-4xl text-[#01003d]">Skills</h1>
            <div className="flex flex-wrap gap-4 justify-center">
            {
                Data.map((item)=>(
                    <div key={item.id} className="bg-[#01003d] capitalize px-4 py-1 rounded-md text-gray-200">{item.lang}</div>
                ))
            }

            </div>
        </div>
    )
}