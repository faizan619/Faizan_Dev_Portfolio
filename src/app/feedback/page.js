import Link from "next/link";

const getFeedback = async()=>{
    let data = await fetch('http://localhost:3000/api',{
        cache:"no-store"
    });
    data = await data.json();
    if(data.success){
        return data.result
    }
    else{
        return {success:false}
    }
}

export default async function Feedback(){

    const feedbacks = await getFeedback();
    console.log("hello",feedbacks)

    return(
        <div className="min-h-screen p-5 bg-white">
            <div className=" my-5 flex justify-between items-center">
                <p className="text-center text-2xl capitalize mb-3">Feedback of the users</p>
                <Link href="/" className="border border-black px-4 text-lg  uppercase hover:bg-gray-100">Home</Link>
            </div>
            <div className="flex gap-5 flex-wrap text-white justify-center">

                    {
                        feedbacks.map((item)=>(
                            <div className="border w-[17rem] p-5 flex flex-col rounded-md bg-gray-800">
                            <div className="self-center flex flex-col">
                                <div className="border inline-block p-3 rounded-full self-center mb-2 bg-white text-black font-extrabold">FN</div>
                                <div className="font-extrabold text-xl ">{item.name}</div>
                            </div>
                            <div className="border-y-2 py-2 my-2">
                                <div>{item.comment}</div>
                            </div>
                                <p className="text-center">Feedback by {item.email}</p>        
                            </div>
                        ))
                    }
                    {/* <div className="self-center flex flex-col">
                        <div className="border inline-block p-3 rounded-full self-center mb-2 bg-white text-black font-extrabold">FN</div>
                        <div className="font-extrabold text-xl ">Faizan Alam</div>
                    </div>
                    <div className="border-y-2 py-2 my-2">
                        <div>i really like the website very much hope this website give us some inspiration in my career</div>
                    </div>
                        <p className="text-center">Feedback by Faizan</p> */}
                
            </div>
        </div>
    )
}