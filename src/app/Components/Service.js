"use client"
import serviceInfo from '../api/servicedata'
const Service = () => {
  
  return (
    <section className="flex flex-col items-center bg-[#01003d] text-white">
        <div className="flex flex-col items-center py-3">
              <span className="font-semibold text-3xl sm:text-4xl pt-7">
                Our Services
              </span>
              <h2 className="text-gray-400">
                What We Offer
              </h2>
        </div>
        <div className="py-5 flex gap-5 flex-wrap justify-center sm:gap-4 md:gap-10 lg:gap-14 xl:gap-16">

        {
          serviceInfo.map((item)=>( 
            <div key={item.id} className="border flex flex-col justify-between items-center px-1 sm:px-3 mx-1 py-4 rounded-md gap-2 sm:w-[20rem] h-[20rem]">
                <div  className="flex flex-col items-center gap-3">
                  <div className="rounded-full bg-gray-300 text-black p-2 font-semibold">{item.logo}</div>
                  <h1 className="text-xl uppercase font-semibold text-center">{item.name}</h1>
                </div>
                {/* {item.serviceinfo} */}
                <p className="text-gray-400">{item.serviceinfo}</p>
                <a href='mailto:alamf6023@gmail.com'><button className="border hover:bg-white hover:text-[rgb(1,0,61)] transition-all font-semibold py-2 rounded-md  px-10">Mail Us</button></a>
            </div>
          ))
        }

          
        
        </div>
          {/* <button className="border px-3 py-2 rounded-md inline-block hover:bg-gray-800" onClick={()=>navigate('services')}>Show All</button> */}
    </section> 
  );
};

export default Service;
