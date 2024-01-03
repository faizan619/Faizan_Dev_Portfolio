import Data from "../api/data"
export default function Skill(){
    console.log("Data is here : ",Data)
    return(
        <div className="p-3 text-center">
            <h1 className="text-3xl p-5 uppercase fontextrabold">Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 border gap-4">

            {
                Data.map((item)=>(
                    <div className="flex flex-col justify-center max-w-xs p-3 shadow-md rounded-xl sm:px-6 dark:bg-gray-900 dark:text-gray-100">
                        <img src={item.image} alt="skill image" className="w-full h-32  rounded-lg dark:bg-gray-500 aspect-square" /> 
                        <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl uppercase">{item.lang}</h2>
                            </div>
                        </div>
                    </div>
                ))
            }

            </div>
        </div>
    )
}