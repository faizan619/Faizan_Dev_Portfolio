"use client"
import { useRouter } from "next/navigation";
const Service = () => {
  const router = useRouter();
  const navigate = (name)=>{
    router.push(name)
  }
  return (
    <section className="flex flex-col items-center">
        <div className="flex flex-col items-center p-3">
              <span className="font-semibold text-3xl sm:text-4xl">
                Our Services
              </span>
              <h2 className="text-gray-500">
                What We Offer
              </h2>
        </div>
        <div className="p-5 flex gap-5 flex-wrap justify-center sm:gap-4 md:gap-10 lg:gap-14 xl:gap-16">

          <div className="border flex flex-col px-3 py-4 rounded-md gap-2 w-[17rem]">
              <div  className="flex flex-col items-center">
                <div className="rounded-full bg-gray-300 text-black p-2 font-semibold">WD</div>
                <h1 className="text-xl uppercase font-semibold">Website Creation</h1>
              </div>
              <p className="text-gray-500">We <span className="text-white capitalize">specialize</span> in delivering superior <span className="text-white capitalize">website designs</span> featuring a <span className="text-white capitalize">user-friendly UI</span>. Consider giving us an opportunity, and we will undoubtedly prove that choosing us is the optimal decision for your needs.</p>
              <button className="border py-2 rounded-md bg-gray-600">Contact</button>
          </div>
          <div className="border flex flex-col px-3 py-4 rounded-md gap-2 w-[17rem]">
              <div  className="flex flex-col items-center">
                <div className="rounded-full bg-gray-300 text-black p-2 font-semibold">WD</div>
                <h1 className="text-xl uppercase font-semibold">Website Creation</h1>
              </div>
              <p className="text-gray-500">We <span className="text-white capitalize">specialize</span> in delivering superior <span className="text-white capitalize">website designs</span> featuring a <span className="text-white capitalize">user-friendly UI</span>. Consider giving us an opportunity, and we will undoubtedly prove that choosing us is the optimal decision for your needs.</p>
              <button className="border sm:bg-red-700 md:bg-green-700 lg:bg-blue-900 xl:bg-white py-2 rounded-md bg-gray-600">Contact</button>
          </div>
          <div className="border flex flex-col px-3 py-4 rounded-md gap-2 w-[17rem]">
              <div  className="flex flex-col items-center">
                <div className="rounded-full bg-gray-300 text-black p-2 font-semibold">WD</div>
                <h1 className="text-xl uppercase font-semibold">Website Creation</h1>
              </div>
              <p className="text-gray-500">We <span className="text-white capitalize">specialize</span> in delivering superior <span className="text-white capitalize">website designs</span> featuring a <span className="text-white capitalize">user-friendly UI</span>. Consider giving us an opportunity, and we will undoubtedly prove that choosing us is the optimal decision for your needs.</p>
              <button className="border sm:bg-red-700 md:bg-green-700 lg:bg-blue-900 xl:bg-white py-2 rounded-md bg-gray-600">Contact</button>
          </div>
        
        </div>
          <button className="border px-3 py-2 rounded-md inline-block hover:bg-gray-800" onClick={()=>navigate('services')}>Show All</button>
    </section> 
  );
};

export default Service;
