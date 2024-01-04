// import Slider from "react-slick"
// import '../../../node_modules/slick-carousel/slick/slick.css'
// import '@/slick-carousel/slick/slick.theme.css'
// import 'slick-carousel/slick/slick.css'

import Data from "../api/data"
export default function Skill(){
    // console.log("Data is here : ",Data)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Set the number of slides to show at a time
        slidesToScroll: 1,
      };
    
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