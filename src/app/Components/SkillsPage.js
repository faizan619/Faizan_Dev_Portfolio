import Data from "../api/data"
export default function Skill(){
    console.log("Data is here : ",Data)
    return(
        <div className="p-3 text-center">
            <h1 className="text-3xl p-5 uppercase fontextrabold">Skills</h1>
            <div className="flex flex-wrap gap-4">

            {
                Data.map((item)=>(
                    <div className="bg-gray-800 capitalize px-4 py-1 rounded-md text-gray-200">{item.lang}</div>
                ))
            }

            </div>
        </div>
    )
}