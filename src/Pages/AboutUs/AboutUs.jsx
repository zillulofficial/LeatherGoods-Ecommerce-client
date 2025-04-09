import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { GiFist } from "react-icons/gi";
import { GiTargetLaser } from "react-icons/gi";
import { Link } from "react-router-dom";

const AboutUs = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <div className="bg-cover bg-no-repeat md:h-[500px] h-[300px] bg-fixed bg-[url(https://i.postimg.cc/Px61cJqc/banner-1.jpg)] mb-32">
                <div className="h-full bg-black opacity-65 mb-24">
                    <p className="flex drop-shadow-2xl h-full opacity-100 justify-center items-center text-white text-5xl md:text-9xl">About Us</p>
                </div>
            </div>

            <div className="bg-[#0066ff10] py-16 mb-32">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-36 lg:mb-48">
                    <div className="w-1/2 relative">
                        <img data-aos="fade-right" className="lg:w-3/5 md:w-3/4 rounded-xl transition-all hover:cursor-pointer hover:scale-95 duration-500 ease" src="https://i.postimg.cc/YqbPcvMx/bg-3.jpg" alt="" />
                        <img data-aos="fade-left" className="lg:w-3/5 md:w-3/4 rounded-xl absolute right-5 top-2/3 border-white border-4 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease"
                            src="https://i.postimg.cc/6pqmBBQx/bg-1.jpg" alt="" />
                    </div>
                    <div  data-aos="fade-left"  className="md:w-[600px] h-full mx-auto flex flex-col justify-center lg:mt-48">
                        <p className="font-bold text-3xl md:text-5xl mb-8">We are qualified <br className="lg:block hidden " />& of experience <br className="lg:block hidden " />in this field</p>
                        <p className=" mb-5 ">Tanex International is a dynamic and trusted leather buying house operating from Bangladesh’s largest tannery hub. We have built a strong reputation for delivering premium leather to international markets.
                        </p>
                        <p className=" mb-8 mx-auto"> Our commitment to ethical sourcing, sustainability, and customer satisfaction sets us apart in the leather industry.</p>
                        <Link to='/login'>
                            <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0057B7] group-hover:h-full"></span>
                                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Join Us</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mb-32">
                <div className="bg-[url(https://i.postimg.cc/XNHg1HGJ/bg-5.jpg)] bg-fixed bg-cover bg-no-repeat py-20">
                    <div className="container mx-auto lg:flex lg:justify-center">
                        <div className="bg-white text-center py-12 px-4">
                            <GiTargetLaser className="text-6xl flex justify-center w-full mb-3"></GiTargetLaser>
                            <p className="text-lg text-black mb-3">Our Mission</p>
                            <p className="text-md text-[#00000080]">
                                To provide high-quality leather with transparency, efficiency, and professionalism.
                            </p>
                        </div>
                        <div className="bg-[#0057B7] text-center py-12 px-4">
                            <GiFist className="text-6xl text-white flex justify-center w-full mb-3"></GiFist>
                            <p className="text-lg text-white mb-3">Our Commitment</p>
                            <p className="text-md text-[#ffffff80]">
                                To uphold ethical sourcing, sustainable practices, and customer satisfaction, ensuring long-term partnerships built on trust and excellence.
                            </p>
                        </div>
                        <div className="bg-white text-center py-12 px-4">
                            <FaEye className="text-5xl flex justify-center w-full mb-3"></FaEye>
                            <p className="text-lg text-black mb-3">Our Vision</p>
                            <p className="text-md text-[#00000080]">
                                To be a globally recognized leather sourcing partner, ensuring excellence in every transaction
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AboutUs;