"use client"
import serviceInfo from '../api/servicedata'
const Service = () => {
  
  return (
    // <section className="flex flex-col items-center bg-[#01003d] text-white">
    <section className="dark:bg-[#1c1e29] flex flex-col items-center bg-slate-100 text-[#01003d]">
        <div className="flex flex-col items-center py-3">
              <span className="font-semibold text-3xl sm:text-4xl pt-7 dark:text-[#4171f5] ">
                Services
              </span>
              <h2 className="text-gray-700 dark:text-gray-300">
                What I Offer
              </h2>
        </div>
        <div className="py-5 flex gap-5 flex-wrap justify-center sm:gap-4 md:gap-10 lg:gap-14 xl:gap-16">
{/* dark:text-[#4171f5] */}
        {
          serviceInfo.map((item)=>( 
            <div key={item.id} className="dark:border-[#4171f5] border border-[#01003d] flex flex-col justify-between items-center px-1 sm:px-3 mx-1 py-4 rounded-md gap-2 sm:w-[20rem] h-[20rem]"> 
                <div  className="flex flex-col items-center gap-3">
                  <div className="dark:bg-[#4171f5] rounded-full bg-[#01003d] text-white p-3 font-semibold">{item.logo}</div>
                  <h1 className="dark:text-[#4171f5] text-xl uppercase font-semibold text-center">{item.name}</h1>
                </div>
                <p className="dark:text-gray-300 text-gray-600">{item.serviceinfo}</p>
                <a href={`https://api.whatsapp.com/send?phone=919987337815&text=Hello%20Faizan.%20I%20Have%20a%20Project%20for%20${item.name}`}><button className="dark:bg-[#4171f5] dark:border-white dark:hover:text-black dark:hover:border-blue-600 border border-[#01003d] bg-[#01003d] text-white hover:scale-110 dark:hover:bg-white  transition-all font-semibold py-2 rounded-md  px-10">Chat</button></a>
            </div>
          ))}
        </div>
    </section> 
  );
};

export default Service;
