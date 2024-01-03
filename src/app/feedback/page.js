export default function Feedback(){
    return(
        <div className="min-h-screen p-5">
            <p className="text-center text-2xl capitalize mb-3">Feedback of the users</p>
            <div className="flex gap-5 flex-wrap justify-center">


                <div className="border w-[20rem] p-3 flex flex-col rounded-md bg-gray-800">
                    <div className="self-center flex flex-col">
                        <div className="border inline-block p-3 rounded-full self-center mb-2 bg-white text-black font-extrabold">FN</div>
                        <div className="font-extrabold text-xl ">Faizan Alam</div>
                    </div>
                    <div className="border-y-2 py-2 my-2">
                        <div>i really like the website very much hope this website give us some inspiration in my career</div>
                    </div>
                        <p className="text-center">Feedback by Faizan</p>
                </div>
                


            </div>
        </div>
    )
}