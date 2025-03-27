import { FcInTransit } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { BiSolidCustomize } from "react-icons/bi";
import { FcFaq } from "react-icons/fc";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
            Aos.init()
        }, [])
    return (
        <div>
            <div className="text-center">
                <p data-aos="fade-up" data-aos-duration="1000" className=" mb-8 text-blue-400">What we do</p>
                <p data-aos="fade-up" data-aos-duration="1000" className="text-4xl roboto font-bold uppercase mb-32">Expert leather sourcing, <span className="md:border-b-8  md:border-[#0057B7]">quality</span> <br className="hidden md:block" /> <span className="md:border-b-8  md:border-[#0057B7]">assurance</span> & logistics.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div  data-aos="fade-up" data-aos-duration="1000" className="bg-white hover:bg-[#000000] hover:text-white transition-all ease duration-700 shadow-lg py-16">
                        <FcInTransit className="text-8xl text-[#0057B7] flex justify-center w-full mb-8"></FcInTransit>
                        <p className="text-5xl  font-bold uppercase mb-8">Leather Sourcing</p>
                        <p className="text-[#777777] uppercase">Direct supply from reputed tanneries in Bangladesh.</p>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="1000" className="bg-[#0066ff10] hover:bg-[#000000] hover:text-white transition-all ease duration-700 shadow-lg py-16">
                        <FcInspection className="text-8xl text-[#0057B7] flex justify-center w-full mb-8"></FcInspection>
                        <p className="text-5xl  font-bold uppercase mb-8">Quality Inspection</p>
                        <p className="text-[#777777] uppercase">Ensuring compliance with international standards.</p>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="1000" className="bg-white hover:bg-[#000000] hover:text-white transition-all ease duration-700 shadow-lg py-16">
                        <BiSolidCustomize className="text-8xl text-[#0057B7] flex justify-center w-full mb-8"></BiSolidCustomize>
                        <p className="text-5xl  font-bold uppercase mb-8">Custom Orders</p>
                        <p className="text-[#777777] uppercase">Tailored leather processing as per client specifications.</p>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="1000" className="bg-[#0066ff10] hover:bg-[#000000] hover:text-white transition-all ease duration-700 shadow-lg py-16">
                        <FcFaq className="text-8xl text-[#0057B7] flex justify-center w-full mb-8"></FcFaq>
                        <p className="text-5xl  font-bold uppercase mb-8">Export Support</p>
                        <p className="text-[#777777] uppercase">Hassle-free documentation and global delivery.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;